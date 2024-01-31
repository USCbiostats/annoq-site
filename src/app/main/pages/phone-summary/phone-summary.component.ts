import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';
import { ColumnService } from '../../apps/annotation/services/column.service';
import { Subject, takeUntil } from 'rxjs';
import { SnpService } from 'app/main/apps/snp/services/snp.service';
import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';

@Component({
  selector: 'phone-summary',
  templateUrl: './phone-summary.component.html',
  styleUrls: ['./phone-summary.component.scss']
})
export class PhoneSummaryComponent implements OnInit {

  private _unsubscribeAll: Subject<any>;
  isMobile: boolean;
  
  constructor(public annoqMenuService: AnnoqMenuService,
    private columnService: ColumnService,
    public snpService: SnpService,
    private route: ActivatedRoute,
    private _platform: Platform,
    private router: Router) {

    this._unsubscribeAll = new Subject();
    this.isMobile = false;

    this.route
      .queryParams
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(params => {
        this.snpService.initialSearchParams.query_type = params['query_type'] || null;
        this.snpService.initialSearchParams.chr = params['chr'] || null;
        this.snpService.initialSearchParams.start = params['start'] || null;
        this.snpService.initialSearchParams.end = params['end'] || null;
        this.snpService.initialSearchParams.gp = params['gp'] || null;
      });
  }

  ngOnInit() {
    if (this._platform.ANDROID || this._platform.IOS) {
      this.isMobile = true;
    }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  stats() {
    if (this.isMobile) {
      this.snpService.getStats(this.columnService.column);
      this.router.navigate(['/stats']);
    }
  }

  table() {
    if (this.isMobile) {
      this.router.navigate(['/table']);
    }
  }
}
