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
import { RightPanel } from '@annoq.common/models/menu-panels';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { cloneDeep } from 'lodash';
import { environment } from 'environments/environment';
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
    private changeDetectorRefs: ChangeDetectorRef,
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

      setTimeout(() => {
        // this.columns = [];
        //this.displayedColumns = this.columns.map(c => c.name);
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
            valueType: detail.value_type,
            rootUrl: detail.root_url,
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

  getUcscLink(element) {
    const chr = `${element.chr}:${element.pos}-${element.pos}`
    return environment.ucscUrl + chr
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
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
    this.annoqMenuService.openRightDrawer();
    this.snpService.getStats('ANNOVAR_ensembl_Effect');
  }
}

