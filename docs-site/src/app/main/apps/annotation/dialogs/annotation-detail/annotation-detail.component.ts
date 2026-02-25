
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-annotation-detail',
  templateUrl: './annotation-detail.component.html',
  styleUrls: ['./annotation-detail.component.scss']
})
export class AnnotationDetailDialogComponent implements OnInit, OnDestroy {
  private _unsubscribeAll: Subject<any>;
  annotationDetail

  constructor(
    private _matDialogRef: MatDialogRef<AnnotationDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: any,
  ) {
    this._unsubscribeAll = new Subject();

    this.annotationDetail = this._data.annotation
    console.log(this.annotationDetail)
  }

  ngOnInit() {
  }

  close() {
    this._matDialogRef.close();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
