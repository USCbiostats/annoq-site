import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDrawer } from '@angular/material/sidenav';

import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';
import { RightPanel } from '@annoq.common/models/menu-panels';
import { Subject, takeUntil } from 'rxjs';
import { SnpService } from 'app/main/apps/snp/services/snp.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  RightPanel = RightPanel;

  @ViewChild('leftDrawer', { static: true })
  leftDrawer: MatDrawer;

  @ViewChild('rightDrawer', { static: true })
  rightDrawer: MatDrawer;

  searchCriteria: any = {};
  searchForm: FormGroup;
  leftPanelMenu;
  private _unsubscribeAll: Subject<any>;


  constructor(public annoqMenuService: AnnoqMenuService,
    public snpService: SnpService,
    private route: ActivatedRoute) {

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

  ngOnInit() {
    this.annoqMenuService.setLeftDrawer(this.leftDrawer);
    this.annoqMenuService.setRightDrawer(this.rightDrawer);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
