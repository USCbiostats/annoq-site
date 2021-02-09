import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Annotation } from 'app/main/apps/annotation/models/annotation';
import { AnnotationService } from 'app/main/apps/annotation/services/annotation.service';
import { Observable, Subject } from 'rxjs';
import { startWith, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  annotations: Annotation[] = [];

  searchForm: FormGroup;
  selectedAnnotation = {};
  searchFormData: any = [];

  filteredAnnotations: Annotation[] = [];;

  private _unsubscribeAll: Subject<any>;


  constructor(
    private annotationService: AnnotationService,
  ) {
    this.searchForm = this.createSearchForm();
    this._unsubscribeAll = new Subject();


    this.onValueChanges();
  }

  ngOnInit() {

    this.annotationService.getPlaneAnnotationList().pipe(
      takeUntil(this._unsubscribeAll))
      .subscribe((response: Annotation[]) => {
        this.annotations = response['header_tree_array'];
        this.filteredAnnotations = this.annotations
      });
  }

  createSearchForm() {
    return new FormGroup({
      title: new FormControl(),
    });
  }

  onValueChanges() {
    const self = this;

    this.searchForm.controls.title.valueChanges
      .pipe(
        takeUntil(this._unsubscribeAll)
      ).subscribe((annotation) => {
        this.filteredAnnotations = annotation ? this.filterAnnotations(annotation) : this.annotations.slice()
      })
  }

  public filterAnnotations(value: string): any[] {
    const filterValue = value.toLowerCase();

    if (value === '') return this.annotations;
    return this.annotations.filter(annotation => annotation.name.toLowerCase().includes(filterValue));
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
