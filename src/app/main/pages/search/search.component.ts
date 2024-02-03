import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDrawer } from '@angular/material/sidenav';

import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';
import { MiddlePanel, RightPanel } from '@annoq.common/models/menu-panels';
import { Subject, takeUntil } from 'rxjs';
import { SnpService } from 'app/main/apps/snp/services/snp.service';
import { AnnoqDeviceService } from '@annoq.common/services/annoq-device.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  RightPanel = RightPanel;
  MiddlePanel = MiddlePanel;

  @ViewChild('leftDrawer', { static: true })
  leftDrawer: MatDrawer;

  @ViewChild('rightDrawer', { static: true })
  rightDrawer: MatDrawer;

  searchCriteria: any = {};
  searchForm: FormGroup;
  leftPanelMenu;

  isMobile = false
  private _unsubscribeAll: Subject<any>;
  private resizeListener: () => void;


  constructor(
    private annoqDeviceService: AnnoqDeviceService,
    public annoqMenuService: AnnoqMenuService,
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
    this.annoqMenuService.selectMiddlePanel(MiddlePanel.snpTable);

    this.checkDevice();
    this.resizeListener = () => this.checkDevice();
    window.addEventListener('resize', this.resizeListener);
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();

    window.removeEventListener('resize', this.resizeListener);

  }

  private checkDevice() {
    this.isMobile = this.annoqDeviceService.isMobile();
  }

  openAnnotationSelection() {
    this.annoqMenuService.openLeftDrawer()
  }

  openSnpSearch() {
    this.annoqMenuService.selectRightPanel(RightPanel.snpSearch);
    this.annoqMenuService.openRightDrawer()
  }

  openSnpTable() {
    this.annoqMenuService.selectRightPanel(RightPanel.snpTable);
    this.annoqMenuService.closeRightDrawer()
  }

  openSnpSummary() {

    if (this.isMobile) {
      this.annoqMenuService.selectMiddlePanel(MiddlePanel.snpSummary);
      this.annoqMenuService.closeLeftDrawer();
    } else {
      this.annoqMenuService.selectRightPanel(RightPanel.snpSummary);
      this.annoqMenuService.openRightDrawer()
    }
  }

  download() {
    this.snpService.downloadSnp();
  }


  openSnpStats(field = null) {
    if (this.isMobile) {
      this.annoqMenuService.selectMiddlePanel(MiddlePanel.snpStats);
      this.annoqMenuService.closeLeftDrawer();
    } else {
      this.annoqMenuService.selectRightPanel(RightPanel.snpStats);
      this.annoqMenuService.openRightDrawer()
    }

    if (field == null) {
      this.snpService.getStats('pos');
    }
    else {
      this.snpService.getStats(field);
    }
  }
}
