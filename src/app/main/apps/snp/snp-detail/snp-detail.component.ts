import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ColumnValueType } from '@annoq.common/models/annotation';
import { environment } from 'environments/environment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AnnotationService } from '../../annotation/services/annotation.service';


import { SnpService } from '../services/snp.service';

@Component({
  selector: 'annoq-snp-detail',
  templateUrl: './snp-detail.component.html',
  styleUrls: ['./snp-detail.component.scss']
})
export class SnpDetailComponent implements OnInit, OnDestroy {
  ColumnValueType = ColumnValueType
  genesDisplayedSize = environment.termsDisplayedSize;  

  @Input('panelDrawer')
  panelDrawer: MatDrawer;

  rows: any;
  private _unsubscribeAll: Subject<any>;
  constructor(
    private snpService: SnpService,
    private annotationService: AnnotationService) {
    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.snpService.onSnpChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(snpRow => {
        if (!snpRow) {
          return
        }

        this.rows = snpRow

        console.log('value', this.rows)

      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }

  getUcscLink(element) {
    const chr = `${element.chr}:${element.pos}-${element.pos}`
    return environment.ucscUrl + chr
  }

  getGeneLink(item: string) {
    const details = this.annotationService.findDetailByName('enhancer_linked_genes');
    const detail = details.root_url
    return detail + encodeURIComponent(item)
  } 

  close() {
    this.panelDrawer.close()
  }
}

