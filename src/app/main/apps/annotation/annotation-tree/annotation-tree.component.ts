import { Component, OnInit, Input, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNode } from '@angular/material/tree';
import { Subject, Observable, of as observableOf } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AnnotationNode, AnnotationFlatNode } from './../models/annotation'
import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';
import { AnnotationService } from './../services/annotation.service';
import { AnnotationDialogService } from '../services/dialog.service';

@Component({
  selector: 'annoq-annotation-tree',
  templateUrl: './annotation-tree.component.html',
  styleUrls: ['./annotation-tree.component.scss'],
})
export class AnnotationTreeComponent implements OnInit {
  @ViewChild('tree', { static: true }) tree;
  @ViewChildren(MatTreeNode, { read: ElementRef }) treeNodes: ElementRef[];

  dataSource: MatTreeFlatDataSource<AnnotationNode, AnnotationFlatNode>;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private annotationDialogService: AnnotationDialogService,
    public annoqMenuService: AnnoqMenuService,
    private annotationService: AnnotationService,
  ) {


    this._unsubscribeAll = new Subject();

  }

  ngOnInit() {

    this.annotationService.onAnnotationTreeChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(annotationTree => {
        if (!annotationTree) return;

        this.dataSource = this.annotationService.dataSource

        // this.treeControl.expand(this.treeControl.dataNodes[0]) 
        this.annotationService.treeControl.expand(this.annotationService.treeControl.dataNodes[0])
        this.annotationService.setAllVisible(this.annotationService.treeControl.dataNodes);
      });

  }


  selectAnnotation(annotation) {
    this.annotationDialogService.openAnnotationDetailDialog(annotation);
  }

}
