import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ColumnValueType } from '@noctua.common/models/annotation';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AnnotationService } from '../../annotation/services/annotation.service';


import { SnpService } from '../services/snp.service';

@Component({
  selector: 'annoq-snp-detail',
  templateUrl: './snp-detail.component.html',
  styleUrls: ['./snp-detail.component.scss']
})
export class SnpDetailComponent implements OnInit, OnDestroy {
  ColumnValueType = ColumnValueType

  @Input('panelDrawer')
  panelDrawer: MatDrawer;

  rows: any;
  private _unsubscribeAll: Subject<any>;
  constructor(
    private snpService: SnpService,
    private annotationService: AnnotationService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.snpService.onSnpChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(snpRow => {
        if (!snpRow) {
          return
        }
        this.rows = snpRow;

      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  mapGOids(valueType, value) {
    if (!value) {
      return []
    }
    const list = value.split('|').map(item => {
      return {
        url: environment.amigoTermUrl + item,
        label: item
      }
    })

    return list
  }

  mapGOlabel(valueType, value) {
    if (!value) {
      return []
    }
    const list = value.split('|').map(item => {
      return {
        label: item
      }
    })

    return list
  }


  close() {
    this.panelDrawer.close()
  }


}

