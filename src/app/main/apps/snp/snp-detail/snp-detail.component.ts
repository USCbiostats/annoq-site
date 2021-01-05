import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


import { SnpService } from '../services/snp.service';

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

