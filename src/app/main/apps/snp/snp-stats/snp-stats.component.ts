import { Component, OnInit, OnDestroy, NgZone, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { takeUntil } from 'rxjs/operators';
import { AnnotationService } from '../../annotation/services/annotation.service';
import { SnpPage } from '../models/page';
import { SnpService } from '../services/snp.service';

enum StatsType {
  GENERAL = 'general',
}

@Component({
  selector: 'annoq-snp-stats',
  templateUrl: './snp-stats.component.html',
  styleUrls: ['./snp-stats.component.scss']
})
export class SnpStatsComponent implements OnInit, OnDestroy {
  StatsType = StatsType;
  snpPage: SnpPage;
  columns: any[] = [];

  @Input('panelDrawer')
  panelDrawer: MatDrawer;

  loadingSpinner: any = {
    color: 'primary',
    mode: 'indeterminate'
  };

  selectedStatsType = StatsType.GENERAL;

  statsTypes = [
    {
      name: StatsType.GENERAL,
      label: 'General'
    }
  ]

  private _unsubscribeAll: Subject<any>;

  pies = []

  constructor(
    private snpService: SnpService,
    private annotationService: AnnotationService) {
    this._unsubscribeAll = new Subject();
  }


  ngOnInit(): void {
    this.snpService.onSnpsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((snpPage: SnpPage) => {
        if (snpPage) {
          this.snpService.getStats('SnpEff_refseq_Transcript_ID')
        }
      });

    this.snpService.onSnpsAggsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((snpPage: SnpPage) => {
        if (snpPage) {
          console.log(snpPage)
        }
      });
  }


  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  selectStatsType(name: StatsType) {
    this.selectedStatsType = name;
  }

  setSnpPage(snpPage: SnpPage) {
    if (snpPage.source) {
      this.snpPage = snpPage;
      this.columns = snpPage.source.map((header) => {
        const detail = this.annotationService.findDetailByName(header);
        const agg = snpPage.aggs[header]
        const count = agg ? agg['doc_count'] : '';
        const label = detail.label ? detail.label : header;
        return {
          name: header,
          count: count,
          label: label.replaceAll('_', ' '),
          valueType: detail.value_type,
          rootUrl: detail.root_url
        }
      });
    }
  }

  addExistFilter(field) {
    this.snpService.addExistFilter(field);
  }

  close() {
    this.panelDrawer.close();
  }

}
