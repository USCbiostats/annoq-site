import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { getColor } from '@annoq.common/data/annoq-colors';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AggregationItem, Bucket, SnpAggs } from 'generated/graphql';
import { SnpService } from '../../services/snp.service';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'annoq-general-stats',
  templateUrl: './general-stats.component.html',
  styleUrls: ['./general-stats.component.scss']
})
export class GeneralStatsComponent implements OnInit, OnDestroy {

  snpAggs: SnpAggs;
  snpAggsField: keyof SnpAggs;

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

  constructor(private snpService: SnpService,
    private _platform: Platform) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {

    this.snpService.onSnpsAggsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((aggs) => {
        if (aggs) {
          const { snpAggs, field } = aggs;
          this.snpAggs = snpAggs;
          this.snpAggsField = field;
          this.generateStats()
        }
      });

    if (this._platform.ANDROID || this._platform.IOS) {

      this.existsPieOptions = {
        view: [400, 200],
        gradient: true,
        legend: false,
        showLabels: true,
        isDoughnut: false,
        maxLabelLength: 20,
        colorScheme: {
          domain: [getColor('green', 500), getColor('red', 500)]
        },
    
      }

      this.annotationFrequencyBarOptions = {
        view: [400, 400],
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
    }

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  generateStats() {

    const fieldAggregation: AggregationItem = (this.snpAggs && this.snpAggs[this.snpAggsField]) as any as AggregationItem;
    if (!fieldAggregation) {
      return
    }

    if (fieldAggregation.frequency) {
      this.stats.annotationFrequencyBar = this.snpService.buildAnnotationBar(fieldAggregation.frequency)
    }

    if (fieldAggregation.doc_count !== undefined && fieldAggregation.missing !== undefined) {
      const buckets: Bucket[] = [{
        key: 'Values Exist',
        doc_count: fieldAggregation.doc_count,
      }, {
        key: 'Values Missing',
        doc_count: fieldAggregation.missing.doc_count,
      }]
      this.stats.existsPie = this.snpService.buildAnnotationBar(buckets)
    }
  }

}
