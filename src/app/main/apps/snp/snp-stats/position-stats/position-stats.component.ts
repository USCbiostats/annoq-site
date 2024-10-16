import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AggregationItem, SnpAggs } from 'generated/graphql';
import { SnpService } from '../../services/snp.service';
import { Platform } from '@angular/cdk/platform';

@Component({
  selector: 'annoq-position-stats',
  templateUrl: './position-stats.component.html',
  styleUrls: ['./position-stats.component.scss']
})
export class PositionStatsComponent implements OnInit, OnDestroy {

  snpAggs: SnpAggs;

  posHistogramLineOptions = {
    view: [500, 400],
    legend: false,
    legendPosition: 'below',
    showLabels: true,
    animations: true,
    xAxis: true,
    yAxis: true,
    showYAxisLabel: true,
    showXAxisLabel: true,
    xAxisLabel: 'Position',
    yAxisLabel: 'Annotations',
    timeline: true,
  }


  stats = {
    posHistogramLine: [],
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
          const { snpAggs } = aggs;
          this.snpAggs = snpAggs;
          this.drawStats()
        }
      });

      if (this._platform.ANDROID || this._platform.IOS) {
        this.posHistogramLineOptions = {
          view: [400, 400],
          legend: false,
          legendPosition: 'below',
          showLabels: true,
          animations: true,
          xAxis: true,
          yAxis: true,
          showYAxisLabel: true,
          showXAxisLabel: true,
          xAxisLabel: 'Position',
          yAxisLabel: 'Annotations',
          timeline: true,
        }
      }

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  drawStats() {

    const posHistogramAgg = this.snpAggs?.pos?.histogram

    if (posHistogramAgg) {
      this.stats.posHistogramLine = this.snpService.buildAnnotationLine(posHistogramAgg, 'pos')
    }
  }

}
