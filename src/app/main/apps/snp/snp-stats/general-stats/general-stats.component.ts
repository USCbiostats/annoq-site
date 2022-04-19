import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { getColor } from '@annoq.common/data/annoq-colors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SnpPage } from '../../models/page';
import { FrequencyBucket, SnpAggs } from '../../models/snp-aggs';
import { SnpService } from '../../services/snp.service';

@Component({
  selector: 'annoq-general-stats',
  templateUrl: './general-stats.component.html',
  styleUrls: ['./general-stats.component.scss']
})
export class GeneralStatsComponent implements OnInit, OnDestroy {

  snpAggs: SnpAggs;

  /*   annotationFrequencyBarOptions = {
      view: [500, 500],
      showXAxis: true,
      showYAxis: true,
      gradient: false,
      legend: false,
      showXAxisLabel: true,
      xAxisLabel: 'Aspect',
      showYAxisLabel: true,
      yAxisLabel: 'Annotations',
      animations: true,
      legendPosition: 'below',
      colorScheme: {
        domain: ['#AAAAAA']
      },
      customColors: []
    } */

  existsPieOptions = {
    view: [500, 200],
    gradient: true,
    legend: false,
    showLabels: true,
    isDoughnut: false,
    maxLabelLength: 20,
    colorScheme: {
      domain: [getColor('green', 500), getColor('red', 500)]
    },

  }

  annotationFrequencyBarOptions = {
    view: [500, 400],
    showXAxis: true,
    showYAxis: true,
    gradient: false,
    legend: false,
    showXAxisLabel: true,
    maxYAxisTickLength: 30,
    yAxisLabel: 'Terms',
    showYAxisLabel: true,
    xAxisLabel: 'Count',
  }

  stats = {
    annotationFrequencyBar: [],
    existsPie: [],
    termsBar: [],
  }

  private _unsubscribeAll: Subject<any>;

  constructor(private snpService: SnpService,) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {

    this.snpService.onSnpsAggsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((snpAggs: SnpAggs) => {
        if (snpAggs) {
          this.snpAggs = snpAggs;
          this.generateStats()
        }
      });

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  generateStats() {
    const agg = this.snpAggs?.aggs[`${this.snpAggs.field}_frequency`];
    const missingAgg = this.snpAggs?.aggs[`${this.snpAggs.field}_missing`];
    const existsAgg = this.snpAggs?.aggs[`${this.snpAggs.field}_exists`];

    if (agg?.buckets) {
      this.stats.annotationFrequencyBar = this.snpService.buildAnnotationBar(agg.buckets)
    }

    if (existsAgg && missingAgg) {
      const buckets: FrequencyBucket[] = [{
        key: 'Values Exist',
        doc_count: existsAgg.doc_count,
      }, {
        key: 'Values Missing',
        doc_count: missingAgg.doc_count,
      }]
      this.stats.existsPie = this.snpService.buildAnnotationBar(buckets)
    }
  }

}
