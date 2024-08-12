import { A } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { AnnotationFlatNode } from 'app/main/apps/annotation/models/annotation';

import { AnnotationService } from 'app/main/apps/annotation/services/annotation.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.scss']
})

export class VersionComponent implements OnInit {

  versionColumns = [
    'name',
    'version'];

  flattenedAnnotations: AnnotationFlatNode[] = [];
  private _unsubscribeAll: Subject<any>;  

  constructor(
    public annotationService: AnnotationService) {
      // console.log("constructor");      
      this._unsubscribeAll = new Subject();     
  }

  ngOnInit() {
    this.annotationService.onAnnotationTreeChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(annotationTree => {
        if (!annotationTree) return;

        let all = Array<AnnotationFlatNode>();
    
        all = this.annotationService.treeControl.dataNodes;
        // console.log("Called annotation service");
        if (null != all) {
          let nodesWithVersion = Array<AnnotationFlatNode>();
          for (let i = 0; i < all.length; i++) {
            if (null != all[i].version && null != all[i].name) {
              nodesWithVersion.push(all[i]);
            }
          }
          this.flattenedAnnotations = nodesWithVersion;
          // console.log(" Got nodes" + this.annotations.length);
        }

      });

      // console.log("Length of nodes = " + this.annotations.length);




  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }  
}
