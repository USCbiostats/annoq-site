import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { saveAs } from 'file-saver';
import { Annotation, AnnotationNode, AnnotationFlatNode } from './../models/annotation'
import { each, find } from 'lodash';

@Injectable({
    providedIn: 'root',
})
export class AnnotationService {
    annotation: Annotation[];
    annotationNodes: AnnotationNode[];
    annotationDetail: any;
    activeAnnotation: any;
    onAnnotationTreeChanged: BehaviorSubject<any>;
    onAnnotationDetailChanged: BehaviorSubject<any>;

    constructor(private httpClient: HttpClient) {
        this.onAnnotationTreeChanged = new BehaviorSubject([]);
        this.onAnnotationDetailChanged = new BehaviorSubject({});
        //this.activeAnnotation = "LUCA";
    }

    /*
    "api/region/chr/1/start/3/end/2"
    "api/region?chr=1&start=3&end=2&header_idx=1 2 3"
*/
    getAnnotationList() {
        const api = environment.annotationApi;
        const dataset = environment.dataset;
        this.httpClient.get<Annotation[]>(`${api}/anno_tree`)
            .subscribe((response: Annotation[]) => {
                this.annotation = response['header_tree_array'];
                /*       const p = [], r = []
                      this.annotation.forEach((x) => {
      
                          if (x.name.length > 4 && x.name.length < 20 && x.leaf) {
                              console.log(x.name)
                              p.push(x.name)
                          }
                          console.log('Now Panther')
      
                          if ((x.name.toLowerCase().includes('panther') || x.name.toLowerCase().includes('ontology')) && x.name.length < 20) {
                              console.log(x.name)
                              r.push(x.name)
      
                          }
                      })
                      console.log(p)
                      console.log(r)
       */

                this.annotationNodes = this._buildAnnotationTree(this.annotation);
                this.onAnnotationTreeChanged.next(this.annotationNodes);

            });
    }

    getActiveAnnotation() {
        return this.activeAnnotation;
    }

    setActiveAnnotation(annotation: any) {
        this.activeAnnotation = annotation;
    }

    downloadConfig(configText: string) {
        var blob = new Blob([configText], { type: "text/plain;charset=utf-8" });
        saveAs(blob, "config.txt");
    }

    getNodeName(nodeId) {

    }

    getChildren() {

    }

    private _buildAnnotationTree(annotation: Annotation[]): AnnotationNode[] {
        let getNestedChildren = (arr, parent_id, level) => {
            let out = []
            for (let i in arr) {
                if (arr[i].parent_id === parent_id) {
                    let children = getNestedChildren(arr, arr[i].id, level++)

                    if (children.length) {
                        arr[i].children = children
                    }
                    out.push(arr[i])
                }
            }
            return out
        }

        return getNestedChildren(annotation, null, 1);
    }




    private _addHeirarchyLevel(annotationNodes: Annotation[]) {
        each(annotationNodes, function (annotationNode) {
            let level = 0;
            let parent = annotationNode;
            while (parent) {
                parent = find(annotationNodes, { id: parent.parent_id });
                level++;
            }
            // annotationNode.level = level;
        });
    }

}
