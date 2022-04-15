import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';

import { SnpService } from './../services/snp.service'
import { SnpPage } from '../models/page';
import { Gene } from '../models/gene';
import { SnpDialogService } from '../services/dialog.service';

import { MatPaginator } from '@angular/material/paginator';
import { AnnotationService } from '../../annotation/services/annotation.service';
import { ColumnValueType } from '@annoq.common/models/annotation';
import { RightPanel } from '@annoq.common/models/menu-panels';
@Component({
  selector: 'annoq-snp-table',
  templateUrl: './snp-table.component.html',
  styleUrls: ['./snp-table.component.scss']
})
export class SnpTableComponent implements OnInit, OnDestroy {
  ColumnValueType = ColumnValueType;
  RightPanel = RightPanel;
  snpPage: SnpPage;
  gene;
  genes: any[] = [];
  columns: any[] = [];

  loadingIndicator: boolean;
  reorderable: boolean;

  loadingSpinner: any = {
    color: 'primary',
    mode: 'indeterminate'
  };

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;


  displayedColumns = [];

  private _unsubscribeAll: Subject<any>;

  constructor(
    public annoqMenuService: AnnoqMenuService,
    private snpDialogService: SnpDialogService,
    private annotationService: AnnotationService,
    public snpService: SnpService
  ) {
    this.loadingIndicator = false;
    this.reorderable = true;

    this._unsubscribeAll = new Subject();

  }

  ngOnInit(): void {

    const self = this;

    this.columns = [];

    this.snpService.onSnpsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((snpPage: SnpPage) => {
        if (snpPage) {
          this.setSnpPage(snpPage);
        } else {
          this.snpPage = null
        }
      });

    this.snpService.onSnpsDownloadReady
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res) => {
        if (res && res.url) {
          this.snpDialogService.openDownloadToast(res);
        }
      });
  }

  setSnpPage(snpPage: SnpPage) {
    if (snpPage.source) {
      this.snpPage = snpPage;
      this.columns = snpPage.source.map((header) => {
        const detail = this.annotationService.findDetailByName(header);
        let count = ''
        if (snpPage.aggs) {
          const agg = snpPage.aggs[header]
          count = agg ? agg['doc_count'] : '';
        }
        return {
          name: header,
          count: count,
          label: detail.label ? detail.label : header,
          valueType: detail.value_type,
          rootUrl: detail.root_url,
          cell: (element: any) => `${element[header]}`
        }
      });

      this.displayedColumns = this.columns.map(c => c.name);


      if (snpPage.gene) {
        this.gene = new Gene()
        this.gene.gene_id = snpPage.gene.gene_id;
        this.gene.contig = snpPage.gene.contig;
        this.gene.start = snpPage.gene.start;
        this.gene.end = snpPage.gene.end;
      } else {
        this.gene = null
      }
    }
  }

  setPage($event) {
    if (this.snpPage) {
      this.snpService.getSnpsPage(this.snpPage.query, $event.pageIndex + 1);
    }
  }

  addExistFilter(field) {
    this.snpService.addExistFilter(field);
  }

  getStats(field) {
    this.openSnpStats()
    this.snpService.getStats(field);
  }

  selectSnp(row) {
    this.annoqMenuService.selectRightPanel(RightPanel.snpDetail);
    this.annoqMenuService.openRightDrawer();
    const details = this.snpPage.source.map((key) => {
      const detail = this.annotationService.findDetailByName(key);
      return {
        name: key,
        label: detail.label ? detail.label : key,
        valueType: detail.value_type,
        rootUrl: detail.root_url,
        value: row[key]
      }
    });
    this.snpService.onSnpChanged.next(details);

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  download() {
    this.snpService.downloadSnp();
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
    this.annoqMenuService.selectRightPanel(RightPanel.snpSummary);
    this.annoqMenuService.openRightDrawer()
  }

  openSnpStats() {
    this.annoqMenuService.selectRightPanel(RightPanel.snpStats);
    this.annoqMenuService.openRightDrawer()
  }
}

