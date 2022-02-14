import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { NoctuaMenuService } from '@noctua.common/services/noctua-menu.service';

import { SnpService } from './../services/snp.service'
import { SnpPage } from '../models/page';
import { Gene } from '../models/gene';
import { SnpDialogService } from '../services/dialog.service';
import { DataSource } from '@angular/cdk/table';

import { MatPaginator } from '@angular/material/paginator';
import { AnnotationService } from '../../annotation/services/annotation.service';
import { ColumnValueType } from '@noctua.common/models/annotation';
import { environment } from 'environments/environment';
@Component({
  selector: 'annoq-snp-table',
  templateUrl: './snp-table.component.html',
  styleUrls: ['./snp-table.component.scss']
})
export class SnpTableComponent implements OnInit {
  ColumnValueType = ColumnValueType;
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
    private _httpClient: HttpClient,
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
        return {
          name: header,
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

  selectSnp(row) {
    this.snpService.onSnpChanged.next(row);

    this.noctuaMenuService.openRightDrawer();

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  download() {
    this.snpService.downloadSnp();
  }

}

