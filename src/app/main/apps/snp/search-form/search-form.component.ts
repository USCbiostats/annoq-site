import { Component, OnInit, OnDestroy, Input, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatDrawer } from '@angular/material/sidenav';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';
import { SearchFilterType } from '@annoq.search/models/search-criteria';
import { Observable, Subject } from 'rxjs';
import { map, startWith, takeUntil } from 'rxjs/operators';
import { AnnotationService } from '../../annotation/services/annotation.service';
import { SnpPage } from '../models/page';
import { SnpService } from '../services/snp.service';
import { Annotation } from '../../annotation/models/annotation';

@Component({
  selector: 'annoq-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss'],
})

export class SearchFormComponent implements OnInit, OnDestroy {
  SearchFilterType = SearchFilterType;
  snpPage: SnpPage
  @Input('panelDrawer') panelDrawer: MatDrawer;

  @ViewChildren('searchInput') searchInput: QueryList<ElementRef>;
  filterForm: FormGroup;
  selectedOrganism = {};
  searchFormData: any = [];
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredFields: Observable<any[]>;
  annotations: Annotation[] = []

  private _unsubscribeAll: Subject<any>;

  constructor(
    public annoqMenuService: AnnoqMenuService,
    public snpService: SnpService,
    private annotationService: AnnotationService) {
    this.filterForm = this.createFilterForm();
    this._onValueChanges();

    this._unsubscribeAll = new Subject();

  }

  ngOnInit(): void {

    setTimeout(() => {
      this.annotations = this.annotationService.annotations.filter((annotation: Annotation) => {
        return annotation.leaf;
      });

    }, 1000)

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
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  setSnpPage(snpPage: SnpPage) {
    if (snpPage.source) {
      this.snpPage = snpPage;
      snpPage.source.map((header) => {
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


    }
  }

  createFilterForm() {
    return new FormGroup({
      fields: new FormControl(),
    });
  }
  clear() {
    this.searchInput.forEach((item) => {
      item.nativeElement.value = null;
    });
  }

  fieldDisplayFn(field: Annotation): string | undefined {
    return field ? field.name : undefined;
  }


  /* add(event: MatChipInputEvent, filterType, limit = 15): void {
    const input = event.input;
    const value = event.value;

    if (this.snpService.searchCriteria[filterType].length >= limit) {
      //  this.confirmDialogService.openInfoToast(`Reached maximum number of ${filterType} filters allowed`, 'OK');
    } else if ((value || '').trim()) {

      this.snpService.searchCriteria[filterType].push(value.trim());

      this.snpService.updateSearch();
      this.searchInput.forEach((item) => {
        item.nativeElement.value = null;
      });
      this.filterForm.controls[filterType].setValue('');
    }

    if (input) {
      input.value = '';
    }
  } */

  remove(item: string, filterType): void {
    const index = this.snpService.searchCriteria[filterType].indexOf(item);

    if (index >= 0) {
      this.snpService.searchCriteria[filterType].splice(index, 1);
      this.snpService.updateSearch();
    }
  }

  selected(event: MatAutocompleteSelectedEvent, filterType): void {
    this.snpService.searchCriteria[filterType].push(event.option.value);
    this.snpService.updateSearch();

    this.searchInput.forEach((item) => {
      item.nativeElement.value = null;
    });

    this.filterForm.controls[filterType].setValue('');
  }

  filterFields(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.annotations.filter((field: Annotation) => field.name.toLowerCase().indexOf(filterValue) === 0);
  }


  private _onValueChanges() {
    const self = this;

    this.filteredFields = this.filterForm.controls.fields.valueChanges
      .pipe(
        startWith(''),
        map(
          value => typeof value === 'string' ? value : value['name']),
        map(field => field ? this.filterFields(field) : this.annotations.slice())
      );

  }

  close() {
    this.panelDrawer.close();
  }

}
