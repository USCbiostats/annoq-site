import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { ColumnValueType } from '@noctua.common/models/annotation';
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
        this.rows = snpRow;

      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }


  mapFieldValues(value, rootUrl) {

    let list = []
    if (!value) {
      return list;
    }

    if (typeof value === 'string' || value instanceof String) {
      list = value.split('|')
    } else {
      list = [value.toString()]
    }


    const result = list.map(item => {
      if (rootUrl) {
        return {
          url: rootUrl + item,
          label: item
        }
      } else {
        return {
          label: item
        }
      }
    })

    return result;

  }

  close() {
    this.panelDrawer.close()
  }


}

/* ANNOVAR_ensembl_Closest_gene(intergenic_only)
ANNOVAR_ensembl_Gene_ID
VEP_ensembl_Gene_ID
SnpEff_ensembl_Gene_ID
ANNOVAR_refseq_Transcript_ID
VEP_refseq_Transcript_ID
SnpEff_refseq_Transcript_ID
rs_dbSNP151 */
