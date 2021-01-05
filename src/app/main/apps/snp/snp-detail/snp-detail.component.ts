import { Component, Inject, Input, OnInit, ElementRef, OnDestroy, ViewEncapsulation, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort, MatDrawer } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { merge, Observable, Subscription, BehaviorSubject, fromEvent, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, takeUntil } from 'rxjs/operators';


import * as _ from 'lodash';
import { SnpService } from '../services/snp.service';
declare const require: any;
const each = require('lodash/forEach');

@Component({
  selector: 'annoq-snp-detail',
  templateUrl: './snp-detail.component.html',
  styleUrls: ['./snp-detail.component.scss']
})
export class SnpDetailComponent implements OnInit, OnDestroy {

  @Input('panelDrawer')
  panelDrawer: MatDrawer;

  snpRow: any;
  private _unsubscribeAll: Subject<any>;
  constructor(private snpService: SnpService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.snpService.onSnpChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(snpRow => {
        this.snpRow = snpRow;

        console.log(snpRow)
      });
  }

  close() {
    this.panelDrawer.close()
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}

