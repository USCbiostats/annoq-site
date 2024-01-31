import { Component, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';
import { SnpService } from '../../apps/snp/services/snp.service'

import { Platform } from '@angular/cdk/platform';
import { ActivatedRoute, Router } from '@angular/router';
import { ColumnService } from 'app/main/apps/annotation/services/column.service';
@Component({
  selector: 'phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.scss']
})

export class PhoneDetailsComponent implements OnInit {

  searchCriteria: any = {};


  private _unsubscribeAll: Subject<any>;
  isMobile: boolean;

  constructor(
    public annoqMenuService: AnnoqMenuService,
    public snpService: SnpService,
    private _platform: Platform,
    private router: Router,
    private route: ActivatedRoute,
    private columnService: ColumnService
  ) {
    this.isMobile = false;
    this._unsubscribeAll = new Subject();

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

  ngOnInit(): void {

    if (this._platform.ANDROID || this._platform.IOS) {
        this.isMobile = true;
      }
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  summary() {
    if (this.isMobile) {
      this.router.navigate(['/summary']);
    }
  }

  stats() {
    if (this.isMobile) {
      this.snpService.getStats(this.columnService.column);
      this.router.navigate(['/stats']);
    }
  }
}

