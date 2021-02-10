import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of as observableOf } from 'rxjs';
import { saveAs } from 'file-saver';
import { Annotation, AnnotationNode, AnnotationFlatNode } from './../models/annotation'
import { each, find } from 'lodash';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { NoctuaConfirmDialogService } from '@noctua/components/confirm-dialog/confirm-dialog.service';

@Injectable({
    providedIn: 'root',
})
export class AnnotationService {
    annotations: Annotation[];
    annotationNodes: AnnotationNode[];
    annotationDetail: any;
    activeAnnotation: any;
    onAnnotationTreeChanged: BehaviorSubject<any>;
    onAnnotationDetailChanged: BehaviorSubject<any>;

    checklistSelection: SelectionModel<AnnotationFlatNode>;

    treeControl: FlatTreeControl<AnnotationFlatNode>;
    treeFlattener: MatTreeFlattener<AnnotationNode, AnnotationFlatNode>;
    dataSource: MatTreeFlatDataSource<AnnotationNode, AnnotationFlatNode>;

    constructor(
        private httpClient: HttpClient,
        private confirmDialogService: NoctuaConfirmDialogService,) {
        this.onAnnotationTreeChanged = new BehaviorSubject(null);
        this.onAnnotationDetailChanged = new BehaviorSubject({});

        this.getAnnotationList();

    }

    getAnnotationList() {
        const api = environment.annotationApi;
        this.httpClient.get<Annotation[]>(`${api}/anno_tree`)
            .subscribe((response: Annotation[]) => {
                if (!response) return;
                this.checklistSelection = new SelectionModel<AnnotationFlatNode>(true);
                this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
                    this._isExpandable, this._getChildren);
                this.treeControl = new FlatTreeControl<AnnotationFlatNode>(this._getLevel, this._isExpandable);
                this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
                this.annotations = response['header_tree_array'];
                this.annotationNodes = this._buildAnnotationTree(this.annotations);
                this.dataSource.data = this.annotationNodes;
                this.onAnnotationTreeChanged.next(this.annotationNodes);

                console.log(this.annotationNodes)
            });
    }

    /*
    "api/region/chr/1/start/3/end/2"
    "api/region?chr=1&start=3&end=2&header_idx=1 2 3"
*/

    transformer = (node: AnnotationNode, level: number) => {
        return new AnnotationFlatNode(
            node.id,
            node.name,
            node.detail,
            node.parent_id,
            node.leaf,
            node.visible,
            !!node.children,
            level);
    }

    private _getLevel = (node: AnnotationFlatNode) => node.level;

    private _isExpandable = (node: AnnotationFlatNode) => node.expandable;

    private _getChildren = (node: AnnotationNode): Observable<AnnotationNode[]> => observableOf(node.children);

    hasChild = (_: number, _nodeData: AnnotationFlatNode) => _nodeData.expandable;


    descendantsAllSelected(node: AnnotationFlatNode): boolean {
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected = descendants.every(child =>
            this.checklistSelection.isSelected(child)
        );
        return descAllSelected;
    }

    /** Whether part of the descendants are selected */
    descendantsPartiallySelected(node: AnnotationFlatNode): boolean {
        const descendants = this.treeControl.getDescendants(node);
        const result = descendants.some(child => this.checklistSelection.isSelected(child));
        return result && !this.descendantsAllSelected(node);
    }

    /** Toggle the to-do item selection. Select/deselect all the descendants node */
    annotationItemSelectionToggle(node: AnnotationFlatNode): void {
        this.checklistSelection.toggle(node);
        const descendants = this.treeControl.getDescendants(node);
        this.checklistSelection.isSelected(node)
            ? this.checklistSelection.select(...descendants)
            : this.checklistSelection.deselect(...descendants);

        // Force update for the parent
        descendants.every(child =>
            this.checklistSelection.isSelected(child)
        );
        this.checkAllParentsSelection(node);
    }

    /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
    annotationLeafItemSelectionToggle(node: AnnotationFlatNode): void {
        this.checklistSelection.toggle(node);
        this.checkAllParentsSelection(node);
    }

    /* Checks all the parents when a leaf node is selected/unselected */
    checkAllParentsSelection(node: AnnotationFlatNode): void {
        let parent: AnnotationFlatNode | null = this.getParentNode(node);
        while (parent) {
            this.checkRootNodeSelection(parent);
            parent = this.getParentNode(parent);
        }
    }

    /** Check root node checked state and change it accordingly */
    checkRootNodeSelection(node: AnnotationFlatNode): void {
        const nodeSelected = this.checklistSelection.isSelected(node);
        const descendants = this.treeControl.getDescendants(node);
        const descAllSelected = descendants.every(child =>
            this.checklistSelection.isSelected(child)
        );
        if (nodeSelected && !descAllSelected) {
            this.checklistSelection.deselect(node);
        } else if (!nodeSelected && descAllSelected) {
            this.checklistSelection.select(node);
        }
    }

    openAnnotationPreview(name: String) {
        console.log(name);
    }

    /* Get the parent node of a node */
    getParentNode(node: AnnotationFlatNode): AnnotationFlatNode | null {
        const currentLevel = this._getLevel(node);

        if (currentLevel < 1) {
            return null;
        }

        const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

        for (let i = startIndex; i >= 0; i--) {
            const currentNode = this.treeControl.dataNodes[i];

            if (this._getLevel(currentNode) < currentLevel) {
                return currentNode;
            }
        }
        return null;
    }


    setParentVisibility(node) {

        let parent: AnnotationFlatNode | null = this.getParentNode(node);
        while (parent) {
            parent.visible = node.visible
            parent = this.getParentNode(parent);
        }
    }

    setChildVisibility(text: string, nodes: AnnotationFlatNode[]) {
        nodes.forEach((x: AnnotationFlatNode) => {
            x.visible = x.name.indexOf(text) >= 0;
            if (x.parent_id) this.setParentVisibility(x);

            const children = this.treeControl.getDescendants(x);
            if (children) this.setChildVisibility(text, children);
        });
    }

    setAllVisible(nodes: AnnotationFlatNode[]) {
        nodes.forEach((x: AnnotationFlatNode) => {
            x.visible = true;
        });
    }

    clear() {
        this.checklistSelection.clear();
    }

    onConfigFileChange(event) {
        const self = this;
        let reader = new FileReader();
        //console.log(event, control)

        if (event.target.files && event.target.files.length) {
            const [file] = event.target.files;
            reader.readAsText(file);

            reader.onload = () => {
                try {
                    const searchCriteria = JSON.parse(reader.result as string);
                    //document.getElementById('elementid').value = "";
                    if (searchCriteria && searchCriteria._source) {
                        self.doFileSelection(searchCriteria._source, self.treeControl.dataNodes, self.checklistSelection);
                        console.log(searchCriteria)
                    } else {
                        alert("wrong file format")
                    }
                } catch (exception) {
                    alert("invalid file")
                }
            };
        }
    }



    doFileSelection(ids: string[], dataNodes: AnnotationFlatNode[], checklistSelection: SelectionModel<AnnotationFlatNode>) {
        checklistSelection.clear();
        ids.forEach((id: string) => {
            const node = find(dataNodes, { name: id });

            if (node) {
                checklistSelection.select(node);
            }
        });
    }




    getActiveAnnotation() {
        return this.activeAnnotation;
    }

    setActiveAnnotation(annotation: any) {
        this.activeAnnotation = annotation;
    }

    downloadConfig() {/*
        const annotations = this.checklistSelection.selected as any[];
        const source = annotations.reduce((annotationString, item) => {
          return annotationString + ' ' + item.id
        }, []);
    
        if (source.length > 0) {
          this.annotationService.downloadConfig(source.trim());
        } else {
          this.snpDialogService.openMessageToast('Select at least one annotation from the tree', 'OK');
        }*/
        const annotations = this.checklistSelection.selected as any[];
        const source = annotations.map((item: AnnotationFlatNode) => {
            return item.name; //item.leaf ? item.name : false;
        }, []);
        if (source.length > 0) {
            this.saveConfig(JSON.stringify({ "_source": source }));
        } else {
            this.confirmDialogService.openConfirmDialog(
                'No Selection Found', 'Select at least one annotation from the tree');
        }
    }

    saveConfig(configText: string) {
        var blob = new Blob([configText], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "config.txt");
    }



    private _buildAnnotationTree(annotation: Annotation[]): AnnotationNode[] {
        let getNestedChildren = (arr, parent_id, level) => {
            let out = []
            for (let i in arr) {
                if (arr[i].parent_id === parent_id) {
                    let children = getNestedChildren(arr, arr[i].id, level++)

                    if (children.length) {
                        arr[i].children = children
                    }
                    out.push(arr[i])
                }
            }
            return out
        }

        return getNestedChildren(annotation, null, 1);
    }




    private _addHeirarchyLevel(annotationNodes: Annotation[]) {
        each(annotationNodes, function (annotationNode) {
            let level = 0;
            let parent = annotationNode;
            while (parent) {
                parent = find(annotationNodes, { id: parent.parent_id });
                level++;
            }
            // annotationNode.level = level;
        });
    }

}
