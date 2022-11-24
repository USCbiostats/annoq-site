import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AnnotationService } from './../../annotation/services/annotation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SnpPage } from '../models/page';
import { SnpService } from '../services/snp.service';
import { EntityType } from '@annoq.common/models/entity-type';
import { MatDrawer } from '@angular/material/sidenav';
import { RightPanel } from '@annoq.common/models/menu-panels';
import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';

@Component({
  selector: 'annoq-snp-summary',
  templateUrl: './snp-summary.component.html',
  styleUrls: ['./snp-summary.component.scss']
})
export class SnpSummaryComponent implements OnInit, OnDestroy {
  EntityType = EntityType;
  private _unsubscribeAll: Subject<any>;
  snpPage: SnpPage
  columns: any[] = [];

  @ViewChild('tree') tree;
  @Input('panelDrawer') panelDrawer: MatDrawer;
  treeNodes
  treeOptions = {
    allowDrag: false,
    allowDrop: false,
    // levelPadding: 15,
  };


  constructor(
    public annoqMenuService: AnnoqMenuService,
    private snpService: SnpService,
    private annotationService: AnnotationService) {

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.snpService.onSnpsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((snpPage: SnpPage) => {
        if (snpPage) {
          this.setSnpPage(snpPage);
        } else {
          this.snpPage = null
        }
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  onTreeLoad() {
    // this.tree.treeModel.expandAll();
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

        const label = detail.label ? detail.label : header;

        return {
          name: header,
          count: count,
          label: label.replace(/_/g, ' '),
          valueType: detail.value_type,
          rootUrl: detail.root_url
        }
      });

      this.treeNodes = this.snpService.buildSummaryTree(this.columns)

    }
  }

  addExistFilter(field) {
    this.snpService.addExistFilter(field);
  }

  getStats(field) {
    this.snpService.getStats(field);
    this.annoqMenuService.selectRightPanel(RightPanel.snpStats);
    this.annoqMenuService.openRightDrawer();
  }

  close() {
    this.panelDrawer.close();
  }

}
