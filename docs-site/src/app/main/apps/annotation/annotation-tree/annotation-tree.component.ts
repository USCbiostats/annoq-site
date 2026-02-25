import { Component, OnInit, Input, Injectable, ViewChild, ViewChildren, Renderer2, ElementRef } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNode } from '@angular/material/tree';
import { BehaviorSubject, Subject, Observable, of as observableOf } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Annotation, AnnotationNode, AnnotationFlatNode } from './../models/annotation'

import { NoctuaMenuService } from '@noctua.common/services/noctua-menu.service';
import { AnnotationService } from './../services/annotation.service';
import { SnpService } from './../../snp/services/snp.service'
import { AnnotationDialogService } from '../services/dialog.service';


@Component({
  selector: 'annoq-annotation-tree',
  templateUrl: './annotation-tree.component.html',
  styleUrls: ['./annotation-tree.component.scss'],
})
export class AnnotationTreeComponent implements OnInit {
  @ViewChild('tree', { static: true }) tree;
  @ViewChildren(MatTreeNode, { read: ElementRef }) treeNodes: ElementRef[];

  @Input('checklistSelection')
  public checklistSelection: SelectionModel<AnnotationFlatNode>;

  activeAnnotation: any;
  annotationList: AnnotationNode[];

  treeControl: FlatTreeControl<AnnotationFlatNode>;
  treeFlattener: MatTreeFlattener<AnnotationNode, AnnotationFlatNode>;
  dataSource: MatTreeFlatDataSource<AnnotationNode, AnnotationFlatNode>;

  // checklistSelection = new SelectionModel<AnnotationFlatNode>(true);

  private _unsubscribeAll: Subject<any>;

  constructor(private router: Router,
    private annotationDialogService: AnnotationDialogService,
    private route: ActivatedRoute,
    public noctuaMenuService: NoctuaMenuService,
    private annotationService: AnnotationService,
    private snpService: SnpService,
    private renderer: Renderer2,) {

    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<AnnotationFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    console.log(this.noctuaMenuService.noctuaTypes)
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
}
