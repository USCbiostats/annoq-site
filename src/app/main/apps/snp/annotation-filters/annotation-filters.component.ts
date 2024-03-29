import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';
import { Subject, Observable } from 'rxjs';
import { startWith, map, takeUntil } from 'rxjs/operators';
import { Annotation } from '../../annotation/models/annotation';
import { AnnotationService } from '../../annotation/services/annotation.service';
import { SnpPage } from '../models/page';
import { FrequencyBucket, SnpAggs } from '../models/snp-aggs';
import { SnpService } from '../services/snp.service';

@Component({
  selector: 'annoq-annotation-filters',
  templateUrl: './annotation-filters.component.html',
  styleUrls: ['./annotation-filters.component.scss']
})

export class AnnotationFiltersComponent implements OnInit, OnDestroy {
  filteredFields: Observable<any[]>;
  filteredFieldValues: Observable<any[]>;
  snpPage: SnpPage
  columns: any[] = []

  weeks = [];
  connectedTo = [];

  fieldsFilterForm: FormGroup;
  snpAggs: SnpAggs;
  fieldValues: any[] = [];

  private _unsubscribeAll: Subject<any>;

  indata = {
    fieldsFormArray: [
      {
        fieldFiltersArray: [
          {
            fieldName: "WB:145787",
          }
        ]
      }
    ]
  }


  filteredAnnotations: Observable<string[]>;
  annotations: Annotation[];



  constructor(
    private fb: FormBuilder,
    public annoqMenuService: AnnoqMenuService,
    public snpService: SnpService,
    private annotationService: AnnotationService
  ) {
    this._unsubscribeAll = new Subject();
  }


  ngOnInit(): void {

    this.fieldsFilterForm = this.fb.group({
      fieldsFormArray: this.fb.array([])
    });

    this.annotations = this.annotationService.annotations.filter((annotation: Annotation) => {
      return annotation.leaf;
    });

    this.snpService.onSnpsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((snpPage: SnpPage) => {
        if (snpPage) {
          this.setSnpPage(snpPage);

        } else {
          this.snpPage = null
        }
      });

    this.snpService.onDistinctAggsChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((snpAggs: SnpAggs) => {
        if (snpAggs && snpAggs.aggs) {
          this.snpAggs = snpAggs;
          const agg = snpAggs?.aggs[`${this.snpAggs.field}_distinct`];

          if (agg) {
            this.fieldValues = agg.buckets.map((bucket) => {
              return <FrequencyBucket>{
                key: bucket.key?.field,
                doc_count: bucket.doc_count
              }
            });
          }
        } else {
          this.snpAggs = null
          this.fieldValues = []
        }
      });

    this.fieldsFilterForm.valueChanges.subscribe(value => {
      if (this.fieldsFilterForm.valid) {
        this.addFieldValuesCriteria(value)
      }
    });
  }

  setSnpPage(snpPage: SnpPage) {
    if (snpPage.source) {
      this.snpPage = snpPage;
      this.columns = snpPage.source.map((header) => {
        const detail = this.annotationService.findDetailByName(header);
        return detail;
      });

      this.annotations = this.columns;
    }
  }

  addFieldValuesCriteria(value) {
    if (value.fieldsFormArray.length > 0 && value.fieldsFormArray[0].fieldFiltersArray.length > 0) {
      let isReady = true;
      const query = value.fieldsFormArray.map((fieldFilters) => {
        return fieldFilters.fieldFiltersArray.map((fieldValues) => {
          return {
            name: fieldValues.fieldName.name,
            value: fieldValues.fieldValue.key
          };
        });
      });

      this.snpService.searchCriteria.fieldValues = query;

      this.snpService.updateSearch();
    }
  }

  clearValues() {

  }

  fieldDisplayFn(field: Annotation): string | undefined {
    return field ? field.name : undefined;
  }

  fieldValueDisplayFn(field: any): string | undefined {
    return field ? field.key : undefined;
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.snpService.getDistinctValues(event.option.value.name);
    //  this.searchInput.forEach((item) => {
    //    item.nativeElement.value = null;
    //  });

    //  this.filterForm.controls[filterType].setValue('');
  }

  selectedValue(event: MatAutocompleteSelectedEvent): void {

    //this.snpService.getDistinctValues(event.option.value.name);
    //  this.searchInput.forEach((item) => {
    //    item.nativeElement.value = null;
    //  });

    //  this.filterForm.controls[filterType].setValue('');
  }

  addNewFieldFilterGroup() {
    let control = <FormArray>this.fieldsFilterForm.controls.fieldsFormArray;
    control.push(
      this.fb.group({
        fieldFilterGroup: [''],
        fieldFiltersArray: this.fb.array([])
      })
    )
  }

  deleteFieldFilterGroup(index) {
    let control = <FormArray>this.fieldsFilterForm.controls.fieldsFormArray;
    control.removeAt(index)
  }

  addField(control, value?) {
    const fieldName = new FormControl(null, [
      Validators.required,
      Validators.minLength(1)
    ],
    );
    const fieldValue = new FormControl(null, [
      Validators.required,
      Validators.minLength(1)
    ]);
    control.push(this.fb.group({
      fieldName: fieldName,
      fieldValue: fieldValue
    }));

    this._onValueChanges(fieldName, fieldValue);
  }

  deleteProject(control, index) {
    control.removeAt(index)
  }

  setfieldsFormArray() {
    let control = <FormArray>this.fieldsFilterForm.controls.fieldsFormArray;
    this.indata.fieldsFormArray.forEach(x => {
      control.push(this.fb.group({
        fieldFiltersArray: this.setFieldFiltersArray(x)
      }));
    })
  }

  setFieldFiltersArray(x) {
    let arr = new FormArray([]);
    x.fieldFiltersArray.forEach(y => {
      this.addField(arr, y.fieldName);
    });
    return arr;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  save() {
    const self = this;
    const errors = [];
    let canSave = true;

    const withs = this.fieldsFilterForm.value.fieldsFormArray.map((project) => {
      return project.fieldFiltersArray.map((item) => {
        if (!item.fieldName.includes(':')) {
        }
        return item.fieldName;
      }).join('|');
    }).join(',');

    if (canSave) {
    } else {
      // self.annoqFormDialogService.openActivityErrorsDialog(errors);
    }
  }

  filterFieldValues(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.fieldValues.filter((field: FrequencyBucket) => field.key.toLowerCase().includes(filterValue)).slice(0, 50);
  }


  filterFields(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.annotations.filter((field: Annotation) => field.name.toLowerCase().includes(filterValue)).slice(0, 20);;
  }

  private _onValueChanges(fieldNameControl: FormControl, fieldValueControl: FormControl) {
    const self = this;

    this.filteredFields = fieldNameControl.valueChanges
      .pipe(
        startWith(''),
        map(
          value => typeof value === 'string' ? value : value['name']),
        map(field => field ? this.filterFields(field) : this.annotations.slice(0, 25))
      );

    this.filteredFieldValues = fieldValueControl.valueChanges
      .pipe(
        startWith(''),
        map(
          value => typeof value === 'string' ? value : value['key']),
        map(field => field ? this.filterFieldValues(field) : this.fieldValues.slice(0, 25))
      );

  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
}
