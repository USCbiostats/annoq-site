import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NoctuaMenuService } from '@noctua.common/services/noctua-menu.service';
import { Annotation, AnnotationNode, AnnotationFlatNode } from './models/annotation'
import { SelectionModel } from '@angular/cdk/collections';
import { SnpService } from './../snp/services/snp.service';

import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { AnnotationService } from './services/annotation.service';
import { SnpDialogService } from '../snp/services/dialog.service';
import { environment } from 'environments/environment';
import { SampleVCFFile } from '@noctua.common/data/sample-vcf';

@Component({
  selector: 'annoq-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent implements OnInit {

  checklistSelection = new SelectionModel<AnnotationFlatNode>(true);
  annotationForm: FormGroup;

  isConnected = false;
  status: string;
  totalHits: number;
  searchTime: number;
  currentPage: number;
  searchResponse = '';
  PER_PAGE = environment.snpResultsSize;
  totalPages: any;

  public esData: any[];

  constructor(public noctuaMenuService: NoctuaMenuService,
    private annotationService: AnnotationService,
    private snpDialogService: SnpDialogService,
    private cd: ChangeDetectorRef,
    public snpService: SnpService) {
    this.annotationForm = this.createAnnotationForm();
  }

  ngOnInit() {

  }

  createAnnotationForm() {
    return new FormGroup({
      chrom: new FormControl(18),
      chromList: new FormControl(),
      geneProduct: new FormControl('ZMYND11'),
      rsID: new FormControl('rs559687999'),
      keyword: new FormControl('Signaling by GPCR'),
      start: new FormControl(1),
      end: new FormControl(500000),
      all: new FormControl(false),
      uploadList: new FormGroup({
        ids: new FormControl(),
        browse: new FormControl(),
      })
    });
  }

  addSampleVCF() {
    this.annotationForm.get('uploadList.ids').patchValue(SampleVCFFile.data);
  }

  clear() {
    this.checklistSelection.clear();
  }

  submit() {
    const query = this.annotationForm.value;
    const annotations = this.checklistSelection.selected as any[];
    const source = annotations.filter(item => item.leaf).map((item: AnnotationFlatNode) => {
      return item.name; //item.leaf ? item.name : false;
    }, []);

    query.source = source;

    //console.log(query);

    if (source.length > 0) {
      this.snpService.getSnps(query, 1);
    } else {
      this.snpDialogService.openMessageToast('Select at least one annotation from the tree', 'OK');
    }
  }

  onFileChange(event) {
    const reader = new FileReader();
    const ids = this.annotationForm.controls.uploadList['controls'].ids;

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsText(file);

      reader.onload = () => {
        ids.setValue(reader.result);
      };
    }
  }

  downloadConfig() {/*
    const annotations = this.checklistSelection.selected as any[];
    const source = annotations.reduce((annotationString, item) => {
      return annotationString + ' ' + item.id
    }, []);

    if (source.length > 0) {
      this.annotationService.downloadConfig(source.trim());
    } else {
      this.snpDialogService.openMessageToast('Select at least one annotation from the tree', 'OK');
    }*/
    const annotations = this.checklistSelection.selected as any[];
    const source = annotations.map((item: AnnotationFlatNode) => {
      return item.name; //item.leaf ? item.name : false;
    }, []);
    if (source.length > 0) {
      this.annotationService.saveConfig(JSON.stringify({ "_source": source }));
    } else {
      this.snpDialogService.openMessageToast('Select at least one annotation from the tree', 'OK');
    }
  }
}
