import { Component, OnInit, ViewChildren, ElementRef } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeNode } from '@angular/material/tree';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AnnotationNode, AnnotationFlatNode } from './../models/annotation'
import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';
import { AnnotationService } from './../services/annotation.service';
import { AnnotationDialogService } from '../services/dialog.service';
import { SnpService } from '../../snp/services/snp.service';

@Component({
  selector: 'annoq-annotation-tree',
  templateUrl: './annotation-tree.component.html',
  styleUrls: ['./annotation-tree.component.scss'],
})
export class AnnotationTreeComponent implements OnInit {
  @ViewChildren(MatTreeNode, { read: ElementRef }) treeNodes: ElementRef[];

  dataSource: MatTreeFlatDataSource<AnnotationNode, AnnotationFlatNode>;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private annotationDialogService: AnnotationDialogService,
    public annoqMenuService: AnnoqMenuService,
    private snpService: SnpService,
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
        this.annotationService.treeControl.expand(this.annotationService.treeControl.dataNodes[0])
        this.annotationService.treeControl.expand(this.annotationService.treeControl.dataNodes[1])
        this.annotationService.setAllVisible(this.annotationService.treeControl.dataNodes);
        this.annotationService.selectItemsById(this.snpService.initialSelectedIds)
      });
  }

  selectAnnotation(annotation) {
    this.annotationDialogService.openAnnotationDetailDialog(annotation);
  }

}
