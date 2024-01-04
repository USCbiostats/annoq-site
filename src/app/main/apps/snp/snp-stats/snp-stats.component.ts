import { Component, OnInit, OnDestroy, NgZone, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { takeUntil } from 'rxjs/operators';
import { AnnotationService } from '../../annotation/services/annotation.service';
import { SnpPage } from '../models/page';
import { SnpService } from '../services/snp.service';
import { SnpAggs } from '../models/snp-aggs';
import { Annotation } from '../../annotation/models/annotation';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';

enum StatsType {
  GENERAL = 'general',
  POSITION = 'position'
}

@Component({
  selector: 'annoq-snp-stats',
  templateUrl: './snp-stats.component.html',
  styleUrls: ['./snp-stats.component.scss']
})
export class SnpStatsComponent implements OnInit, OnDestroy {
  StatsType = StatsType;
  snpPage: SnpPage;
  snpAggs: SnpAggs;
  columns: any[] = [];
  annotations: Annotation[] = [];
  isMobile: boolean;

  @Input('panelDrawer')
  panelDrawer: MatDrawer;

  loadingSpinner: any = {
    color: 'primary',
    mode: 'indeterminate'
  };

  selectedStatsType = StatsType.GENERAL;
  selectedField = 'default';

  statsTypes = [
    {
      name: StatsType.GENERAL,
      label: 'General'
    },
    {
      name: StatsType.POSITION,
      label: 'Other'
    }
  ]

  private _unsubscribeAll: Subject<any>;

  pies = []

  constructor(
    private snpService: SnpService,
    private annotationService: AnnotationService,
    private _platform: Platform,
    private router: Router) {

    this._unsubscribeAll = new Subject();
    this.isMobile = false;
  }


  ngOnInit(): void {

    this.snpService.onSnpsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((snpPage: SnpPage) => {
        if (snpPage) {
          this.setSnpPage(snpPage);
        }
      });

    this.snpService.onSnpsAggsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((snpAggs: SnpAggs) => {
        if (snpAggs) {
          this.snpAggs = snpAggs;
          this.selectedField = this.snpAggs.field;
        }
      });

      if (this._platform.ANDROID || this._platform.IOS) {
        this.isMobile = true;
      }
  }


  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  selectStatsType(name: StatsType) {
    this.selectedStatsType = name;
  }

  setSnpPage(snpPage: SnpPage) {
    if (snpPage.source) {
      this.snpPage = snpPage;
      this.annotations = snpPage.source.map((header) => {
        const detail = this.annotationService.findDetailByName(header);
        return detail;
      });
    }
  }


  addExistFilter(field) {
    this.snpService.addExistFilter(field);
  }

  selectField(field) {
    this.snpService.getStats(field.value)
  }

  close() {
    if (this.isMobile) {
      this.router.navigate(['/search']);
    }
    this.panelDrawer.close();
  }

}
