import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

import { AnnotationTreeFakeDb } from './../data/annotation-tree';
import { SnpResultFakeDb } from './../data/snp-result'
import { GeneSnpFakeDb } from '../data/gene-snp';

@Injectable({
    providedIn: 'root'
})
export class FakeDbService implements InMemoryDbService {
    createDb(): any {
        return {
            'annotation-list': AnnotationTreeFakeDb.data,
            'snp-result': SnpResultFakeDb.data,
            'gene-snp-result': GeneSnpFakeDb.data
        };
    }
}