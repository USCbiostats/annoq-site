import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NoctuaMenuService } from '@noctua.common/services/noctua-menu.service';

import { SnpService } from './../services/snp.service'
import { SnpPage } from '../models/page';
import { Gene } from '../models/gene';
import { SnpDialogService } from '../services/dialog.service';

import { MatPaginator } from '@angular/material/paginator';
import { AnnotationService } from '../../annotation/services/annotation.service';
import { ColumnValueType } from '@noctua.common/models/annotation';
import { environment } from 'environments/environment';
import { SnpMenuService } from '../services/snp-menu.service';
import { LeftPanel } from '@noctua.common/models/menu-panels';
import { MatDrawer } from '@angular/material/sidenav';
@Component({
  selector: 'annoq-snp-table',
  templateUrl: './snp-table.component.html',
  styleUrls: ['./snp-table.component.scss']
})
export class SnpTableComponent implements OnInit, OnDestroy {
  ColumnValueType = ColumnValueType;
  LeftPanel = LeftPanel;
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

  leftDrawer: MatDrawer
  @ViewChild('leftDrawer', { static: false }) set elemOnHTML(el: MatDrawer) {
    if (el) {
      this.leftDrawer = el;
      this.snpMenuService.setLeftDrawer(this.leftDrawer);
    }
  }

  displayedColumns = [];

  private _unsubscribeAll: Subject<any>;

  constructor(
    public snpMenuService: SnpMenuService,
    private snpDialogService: SnpDialogService,
    public noctuaMenuService: NoctuaMenuService,
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



  mapGOids(valueType, value) {
    if (!value) {
      return []
    }
    const list = value.split('|').map(item => {
      return {
        url: environment.amigoTermUrl + item,
        label: item
      }
    })

    return list
  }

  setSnpPage(snpPage: SnpPage) {
    if (snpPage.source) {
      this.snpPage = snpPage;
      this.columns = snpPage.source.map((header) => {
        const detail = this.annotationService.findDetailByName(header);

        const agg = snpPage.aggs[header]
        const count = agg ? agg['doc_count'] : '';
        return {
          name: header,
          count: count,
          label: detail.label ? detail.label : header,
          valueType: detail.value_type,
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

  selectSnp(row) {
    const details = this.snpPage.source.map((key) => {
      const detail = this.annotationService.findDetailByName(key);
      return {
        name: key,
        label: detail.label ? detail.label : key,
        valueType: detail.value_type,
        value: row[key]
      }
    });
    this.snpService.onSnpChanged.next(details);
    this.noctuaMenuService.openRightDrawer();

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  download() {
    this.snpService.downloadSnp();
  }

  openSnpSearch() {
    this.snpMenuService.selectLeftPanel(LeftPanel.snpSearch);
    this.snpMenuService.openLeftDrawer()
  }

  openSnpTable() {
    this.snpMenuService.selectLeftPanel(LeftPanel.snpTable);
    this.snpMenuService.closeLeftDrawer()
  }

  openSnpSummary() {
    this.snpMenuService.selectLeftPanel(LeftPanel.snpSummary);
    this.snpMenuService.openLeftDrawer()
  }

  openSnpStats() {
    this.snpMenuService.selectLeftPanel(LeftPanel.snpStats);
    this.snpMenuService.openLeftDrawer()
  }
}

