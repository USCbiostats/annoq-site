import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTreeNode, MatTreeFlatDataSource } from '@angular/material/tree';
import { NoctuaMenuService } from '@noctua.common/services/noctua-menu.service';
import { Annotation, AnnotationFlatNode, AnnotationNode } from 'app/main/apps/annotation/models/annotation';
import { AnnotationService } from 'app/main/apps/annotation/services/annotation.service';
import { AnnotationDialogService } from 'app/main/apps/annotation/services/dialog.service';
import { SnpDialogService } from 'app/main/apps/snp/services/dialog.service';
import { Subject } from 'rxjs';
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
  dataSource: MatTreeFlatDataSource<AnnotationNode, AnnotationFlatNode>;


  // checklistSelection = new SelectionModel<AnnotationFlatNode>(true);

  private _unsubscribeAll: Subject<any>;

  constructor(
    public noctuaMenuService: NoctuaMenuService,
    public annotationService: AnnotationService,
  ) {

    this.searchForm = this.createSearchForm();
    this._unsubscribeAll = new Subject();


    this.onValueChanges();

    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {
    this.annotationService.onAnnotationTreeChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(annotationTree => {
        if (!annotationTree) return;

        this.dataSource = this.annotationService.dataSource
        this.treeControl = this.annotationService.treeControl

        // this.treeControl.expand(this.treeControl.dataNodes[0]) 
        this.annotationService.treeControl.expand(this.annotationService.treeControl.dataNodes[0])
        this.annotationService.setAllVisible(this.annotationService.treeControl.dataNodes);
      });

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
      ).subscribe((q) => {
        self.annotationService.setChildVisibility(q, self.annotationService.treeControl.dataNodes)
        self.annotationService.treeControl.expandAll();
      })
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
