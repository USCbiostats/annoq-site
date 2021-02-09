import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, ElementRef, Input, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTreeNode, MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material/tree';
import { NoctuaMenuService } from '@noctua.common/services/noctua-menu.service';
import { Annotation, AnnotationFlatNode, AnnotationNode } from 'app/main/apps/annotation/models/annotation';
import { AnnotationService } from 'app/main/apps/annotation/services/annotation.service';
import { AnnotationDialogService } from 'app/main/apps/annotation/services/dialog.service';
import { SnpDialogService } from 'app/main/apps/snp/services/dialog.service';
import { Observable, Subject, of as observableOf } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  annotations: Annotation[] = [];

  searchForm: FormGroup;
  selectedAnnotation = {};
  searchFormData: any = [];

  filteredAnnotations: Annotation[] = [];;

  private _unsubscribeAll: Subject<any>;
  @ViewChild('tree', { static: true }) tree;
  @ViewChildren(MatTreeNode, { read: ElementRef }) treeNodes: ElementRef[];

  public checklistSelection: SelectionModel<AnnotationFlatNode>;

  activeAnnotation: any;
  annotationList: AnnotationNode[];

  treeControl: FlatTreeControl<AnnotationFlatNode>;
  treeFlattener: MatTreeFlattener<AnnotationNode, AnnotationFlatNode>;
  dataSource: MatTreeFlatDataSource<AnnotationNode, AnnotationFlatNode>;

  // checklistSelection = new SelectionModel<AnnotationFlatNode>(true);

  private _unsubscribeAll: Subject<any>;

  constructor(
    private annotationDialogService: AnnotationDialogService,
    private snpDialogService: SnpDialogService,
    public noctuaMenuService: NoctuaMenuService,
    private annotationService: AnnotationService,
  ) {

    this.checklistSelection = new SelectionModel<AnnotationFlatNode>(true);
    this.searchForm = this.createSearchForm();
    this._unsubscribeAll = new Subject();


    this.onValueChanges();

    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<AnnotationFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this._unsubscribeAll = new Subject();

  }

  ngOnInit() {

    this.annotationService.onAnnotationTreeChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(annotationTree => {
        this.annotationList = annotationTree;
        this.dataSource.data = this.annotationList;

        this.treeControl.expand(this.treeControl.dataNodes[0])
      });

    this.annotationService.getAnnotationList();
  }

  selectAnnotation(annotation) {
    this.annotationDialogService.openAnnotationDetailDialog(annotation);
  }

  transformer = (node: AnnotationNode, level: number) => {
    return new AnnotationFlatNode(
      node.id,
      node.name,
      node.detail,
      node.parent_id,
      node.leaf,
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

  createSearchForm() {
    return new FormGroup({
      title: new FormControl(),
    });
  }

  onValueChanges() {
    const self = this;

    this.searchForm.controls.title.valueChanges
      .pipe(
        takeUntil(this._unsubscribeAll)
      ).subscribe((annotation) => {
        this.filteredAnnotations = annotation ? this.filterAnnotations(annotation) : this.annotations.slice()
      })
  }

  public filterAnnotations(value: string): any[] {
    const filterValue = value.toLowerCase();

    if (value === '') return this.annotations;
    return this.annotations.filter(annotation => annotation.name.toLowerCase().includes(filterValue));
  }

  clear() {
    this.checklistSelection.clear();
  }

  downloadConfig() {
    const annotations = this.checklistSelection.selected as any[];
    const source = annotations.map((item: AnnotationFlatNode) => {
      return item.name; //item.leaf ? item.name : false;
    }, []);
    if (source.length > 0) {
      this.annotationService.downloadConfig(JSON.stringify({ "_source": source }));
    } else {
      this.snpDialogService.openMessageToast('Select at least one annotation from the tree', 'OK');
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
