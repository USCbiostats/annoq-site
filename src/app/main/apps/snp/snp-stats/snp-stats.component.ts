import { Component, OnInit, OnDestroy, NgZone, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';
import { takeUntil } from 'rxjs/operators';
import { AnnotationService } from '../../annotation/services/annotation.service';
import { SnpPage } from '../models/page';
import { SnpService } from '../services/snp.service';
import { SnpAggs } from '../models/snp-aggs';
import { Annotation } from '../../annotation/models/annotation';

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
  snpAggs: SnpAggs;
  columns: any[] = [];
  annotations: Annotation[] = [];

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
    private annotationService: AnnotationService) {
    this._unsubscribeAll = new Subject();
    this.annotations = this.annotationService.annotations.filter((annotation: Annotation) => {
      return annotation.leaf;
    });
  }


  ngOnInit(): void {

    this.snpService.onSnpsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((snpPage: SnpPage) => {
        if (snpPage) {
          // this.snpService.getStats('SnpEff_refseq_Transcript_ID')
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
  }


  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  selectStatsType(name: StatsType) {
    this.selectedStatsType = name;
  }


  addExistFilter(field) {
    this.snpService.addExistFilter(field);
  }

  selectField(field) {
    console.log(field);
    if (field.value === 'default') {
      this.snpService.getStats('ANNOVAR_ensembl_Effect')
    }
    this.snpService.getStats(field.value)
  }

  close() {
    this.panelDrawer.close();
  }

}
