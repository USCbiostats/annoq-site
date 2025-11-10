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
import { AnnoqConfirmDialogService } from '@annoq/components/confirm-dialog/confirm-dialog.service';

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

    count = 0;
    keywordSearchableFields = []

    labelLookup: { [key: string]: Annotation }

    constructor(
        private httpClient: HttpClient,
        private confirmDialogService: AnnoqConfirmDialogService) {
        this.onAnnotationTreeChanged = new BehaviorSubject(null);
        this.onAnnotationDetailChanged = new BehaviorSubject({});

        this.getAnnotationList();
    }

    getAnnotationList() {
        const api = environment.annotationApiV2;
        this.httpClient.get<Annotation[]>(`${api}/annotations`)
            .subscribe((response: any) => {
                if (!response || !response.results) return;

                this.annotations = response.results;
                this.formatLabel(this.annotations);
                this.keywordSearchableFields = this.getSearchableFields(this.annotations);
                this.labelLookup = this.makeLabelLookup(this.annotations);
                this.checklistSelection = new SelectionModel<AnnotationFlatNode>(true);
                this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
                    this._isExpandable, this._getChildren);
                this.treeControl = new FlatTreeControl<AnnotationFlatNode>(this._getLevel, this._isExpandable);
                this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
                this.annotationNodes = this._buildAnnotationTree(this.annotations);
                this.dataSource.data = this.annotationNodes;
                this.onAnnotationTreeChanged.next(this.annotationNodes);
            });
    }

    transformer = (node: AnnotationNode, level: number) => {

        const flatNode = new AnnotationFlatNode(
            node.id,
            node.name,
        );

        flatNode.label = node.label;
        flatNode.detail = node.detail;
        flatNode.link = node.link;
        flatNode.pmid = node.pmid;
        flatNode.version = node.version;
        flatNode.parent_id = node.parent_id;
        flatNode.leaf = node.leaf;
        flatNode.visible = node.visible;
        flatNode.expandable = !!node.children;
        flatNode.level = level;
        flatNode.api_field = node.api_field;

        return flatNode
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

    setParentVisibility(node, q, nodeVvisible) {
        const visible = nodeVvisible || node.visible || node.name.indexOf(q) >= 0;

        let parent: AnnotationFlatNode | null = this.getParentNode(node);
        while (parent) {
            parent.visible = visible
            parent = this.getParentNode(parent);
        }
    }

    setChildVisibility(q: string, nodes: AnnotationFlatNode[]) {
        nodes.forEach((x: AnnotationFlatNode) => {
            x.visible = x.label.includes(q);
            if (x.parent_id) {
                const parent = this.getParentNode(x)
                this.setParentVisibility(parent, q, x.visible);
            }
            const children = this.treeControl.getDescendants(x);
            if (children) this.setChildVisibility(q, children);
        });
    }

    setAllVisible(nodes: AnnotationFlatNode[]) {
        nodes.forEach((x: AnnotationFlatNode) => {
            x.visible = true;
        });
    }


    selectItemsById(ids: number[]) {
        console.log(ids)
        this.treeControl.dataNodes.forEach(item => {
            if (ids.toString().includes(item.id as unknown as string)) {
                this.checklistSelection.select(item);
            }
        });
    }

    formatLabel(annotations: Annotation[]) {
        annotations.forEach((annotation: Annotation) => {
            if (!annotation.label) {
                annotation.label = annotation.name
            }
        })
    }

    findAnnotation(field) {
        return find(this.annotations, (annotation: Annotation) => {
            return field === annotation.name
        })
    }

    getSearchableFields(annotations: Annotation[]) {
        const result = []
        annotations.forEach((annotation: Annotation) => {
            if (annotation.keyword_searchable) {
                result.push(annotation.name)
            }
        })

        return result;
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

    makeLabelLookup(annotations: Annotation[]) {
        return annotations.reduce((lookup, annotation) => {
            lookup[annotation.name] = annotation
            return lookup
        }, {})
    }

    findDetailByName(name) {
        const found = this.labelLookup[name]
        return found
    }

    getAnnotationApiField(name) {
        const found = this.labelLookup[name]
        return found.api_field || name
    }

    getAnnotationNameFromApiField(api_field) {
        const found = find(this.annotations, (annotation: Annotation) => {
            return api_field === annotation.api_field
        })
        return found?.name || api_field
    }

    getIsVa

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

        return getNestedChildren(annotation, undefined, 1);
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
