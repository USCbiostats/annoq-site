import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { LeftPanel, RightPanel } from '@annoq.common/models/menu-panels';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { environment } from 'environments/environment';

import { Platform } from '@angular/cdk/platform';
import { Router } from '@angular/router';
@Component({
  selector: 'annoq-snp-table',
  templateUrl: './snp-table.component.html',
  styleUrls: ['./snp-table.component.scss']
})
export class SnpTableComponent implements OnInit, OnDestroy {
  ColumnValueType = ColumnValueType;
  RightPanel = RightPanel;
  termsDisplayedSize = environment.termsDisplayedSize;
  genesDisplayedSize = environment.termsDisplayedSize;
  snpPage: SnpPage;
  gene;
  genes: any[] = [];
  columns: any[] = [];
  count = 0

  loadingIndicator: boolean;
  reorderable: boolean;

  loadingSpinner: any = {
    color: 'primary',
    mode: 'indeterminate'
  };

  @ViewChild(MatTable) table: MatTable<any>

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  dataSource = new MatTableDataSource<any>();

  displayedColumns = [];

  private _unsubscribeAll: Subject<any>;

  constructor(
    public annoqMenuService: AnnoqMenuService,
    private snpDialogService: SnpDialogService,
    private annotationService: AnnotationService,
    public snpService: SnpService,
  ) {
    this.loadingIndicator = false;
    this.reorderable = true;

    this._unsubscribeAll = new Subject();

  }

  ngOnInit(): void {

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

      setTimeout(() => {
        this.displayedColumns.pop()
      }, 10);

      setTimeout(() => {
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
            value_type: detail.value_type,
            root_rrl: detail.root_url,
            cell: (element: any) => `${element[header]}`
          }
        });
        this.displayedColumns = this.columns.map(c => c.name);
      }, 10);

      if (snpPage.gene) {
        this.gene = new Gene()
        this.gene.gene_id = snpPage.gene.gene_id;
        this.gene.contig = snpPage.gene.contig;
        this.gene.start = snpPage.gene.start;
        this.gene.end = snpPage.gene.end;
      } else {
        this.gene = null
      }

      this.snpPage = snpPage;
      this.dataSource = new MatTableDataSource<any>(this.snpPage.snps);
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
    this.openSnpStats(field)
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
        value_type: detail.value_type,
        root_url: detail.root_url,
        value: row[key]
      }
    });
    this.snpService.onSnpChanged.next(details);

  }

  getUcscLink(element) {
    const chr = `${element.chr}:${element.pos}-${element.pos}`
    return environment.ucscUrl + chr
  }

  getTermLink(id: string, column: string) {
    const details = this.annotationService.findDetailByName(column);
    const detail = details.root_url
    return detail + encodeURIComponent(id) 
  }

  getGeneLink(item: string) {
    const details = this.annotationService.findDetailByName('enhancer_linked_genes');
    const detail = details.root_url
    return detail + encodeURIComponent(item)
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }


  download() {
    this.snpService.downloadSnp();
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
    this.annoqMenuService.selectRightPanel(RightPanel.snpSummary);
    this.annoqMenuService.openRightDrawer()
  }

  openSnpStats(field) {
    this.annoqMenuService.selectRightPanel(RightPanel.snpStats);
    this.annoqMenuService.openRightDrawer();
    if (field == null) {
      this.snpService.getStats(this.columns[0].label);
    }
    else {
      if (field == null) {
        this.snpService.getStats(this.columns[0].label);
      }
      else {
        this.snpService.getStats(field);
      }
    }
  }
}

