import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';
import { AnnotationFlatNode } from './models/annotation'
import { SnpService } from './../snp/services/snp.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AnnotationService } from './services/annotation.service';
import { SnpDialogService } from '../snp/services/dialog.service';
import { environment } from 'environments/environment';
import { SampleVCFFile } from '@annoq.common/data/sample-vcf';
import { RightPanel } from '@annoq.common/models/menu-panels';
import { SampleRSIDFile } from '@annoq.common/data/sample-rsid-list';
import { UrlQueryType } from '@annoq.common/models/query-params';

@Component({
  selector: 'annoq-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss']
})
export class AnnotationComponent implements OnInit {

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

  constructor(public annoqMenuService: AnnoqMenuService,
    public annotationService: AnnotationService,
    private snpDialogService: SnpDialogService,
    public snpService: SnpService) {

    if (this.snpService.initialSearchParams.query_type === UrlQueryType.chr) {
      this.snpService.selectInputType(this.snpService.inputType.chromosome)
    } else if (this.snpService.initialSearchParams.query_type === UrlQueryType.gp) {
      this.snpService.selectInputType(this.snpService.inputType.geneProduct)
    }

    this.annotationForm = this.createAnnotationForm();

  }

  ngOnInit() { }

  createAnnotationForm() {
    return new FormGroup({
      chrom: new FormControl(this.snpService.initialSearchParams.chr || 18),
      chromList: new FormControl(),
      geneProduct: new FormControl(this.snpService.initialSearchParams.gp || 'ZMYND11'),
      rsID: new FormControl('rs559687999'),
      rsIDList: new FormGroup({
        ids: new FormControl(),
        browse: new FormControl(),
      }),
      keyword: new FormControl('Signaling by GPCR'),
      start: new FormControl(this.snpService.initialSearchParams.start || 1),
      end: new FormControl(this.snpService.initialSearchParams.end || 500000),
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

  addSampleRSIDList() {
    this.annotationForm.get('rsIDList.ids').patchValue(SampleRSIDFile.data);
  }

  clear() {
    this.annotationService.checklistSelection.clear();
  }

  clearRSIDList() {
    this.annotationForm.controls.rsIDList['controls'].ids.setValue('')
    this.annotationForm.controls.rsIDList['controls'].browse.setValue('')
  }

  clearVCF() {
    this.annotationForm.controls.uploadList['controls'].ids.setValue('')
    this.annotationForm.controls.uploadList['controls'].browse.setValue('')
  }

  submit() {
    const query = this.annotationForm.value;
    const annotations = this.annotationService.checklistSelection.selected as any[];
    const source = annotations.filter(item => item.leaf).map((item: AnnotationFlatNode) => {
      return item.name;
    }, []);

    query.source = source;

    if (source.length > 0) {
      this.snpService.getSnps(query, 1);
      this.annoqMenuService.closeRightDrawer();
      this.annoqMenuService.selectRightPanel(null);
    } else {
      this.snpDialogService.openMessageToast('Select at least one annotation from the tree', 'OK');
    }
  }

  onRSIDFileChange(event) {
    const reader = new FileReader();
    const ids = this.annotationForm.controls.rsIDList['controls'].ids;

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsText(file);

      reader.onload = () => {
        console.log((reader.result as any).length)
        ids.setValue(reader.result);
      };
    }
  }

  onFileChange(event) {
    const reader = new FileReader();
    const ids = this.annotationForm.controls.uploadList['controls'].ids;

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsText(file);

      reader.onload = () => {
        console.log((reader.result as any).length)
        ids.setValue(reader.result);
      };
    }
  }

}
