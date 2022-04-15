import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from 'elasticsearch-browser';
import { SnpPage } from '../models/page';
import { cloneDeep, orderBy, uniqBy } from 'lodash';
import { FrequencyBucket, SnpAggs } from '../models/snp-aggs';
import { AnnotationService } from '../../annotation/services/annotation.service';
import { ColumnFieldType } from '@annoq.common/models/annotation';
import { SearchCriteria } from '@annoq.search/models/search-criteria';

@Injectable({
    providedIn: 'root',
})
export class SnpService {
    snpResultsSize = environment.snpResultsSize;
    onSnpsChanged: BehaviorSubject<SnpPage>;
    onSnpsAggsChanged: BehaviorSubject<SnpAggs>;
    onSnpChanged: BehaviorSubject<any>;
    onSearchCriteriaChanged: BehaviorSubject<any>;
    searchCriteria: SearchCriteria;
    onSnpsDownloadReady: BehaviorSubject<any>;
    snpPage: SnpPage = new SnpPage();
    loading = false;
    selectedQuery;
    queryOriginal;
    query;

    private client: Client;
    inputType: any = {
        chromosome: {
            id: 1,
            label: 'Chromosome'
        }, chromosomeList: {
            id: 2,
            label: 'VCF File'
        }, geneProduct: {
            id: 3,
            label: 'Gene Product'
        }, rsID: {
            id: 4,
            label: 'rsID'
        }, keyword: {
            id: 5,
            label: 'Keyword Search'
        }
    };

    inputTypes: any = {
        options: [
            this.inputType.chromosome,
            this.inputType.chromosomeList,
            this.inputType.geneProduct,
            this.inputType.rsID,
            this.inputType.keyword
        ]
    };

    constructor(
        private httpClient: HttpClient,
        private annotationService: AnnotationService) {
        this.onSnpsChanged = new BehaviorSubject(null);
        this.onSnpsAggsChanged = new BehaviorSubject(null);
        this.onSnpsDownloadReady = new BehaviorSubject(null);
        this.onSnpChanged = new BehaviorSubject(null);
        this.onSearchCriteriaChanged = new BehaviorSubject(null);
        this.inputTypes.selected = this.inputTypes.options[0];
        this.searchCriteria = new SearchCriteria();

        if (!this.client) {
            this._connect();
        }
    }

    selectInputType(inputType) {
        this.inputTypes.selected = inputType;
    }

    getSnps(annotationQuery: any, page: number): any {
        const self = this;
        self.loading = true;

        let headers = uniqBy([...['chr', 'pos', 'ref', 'alt', 'rs_dbSNP151'], ...annotationQuery.source], (header) => {
            return header;
        });

        this.searchCriteria.clearSearch()
        this.searchCriteria = new SearchCriteria();

        const query: any = {
            '_source': headers
        };

        const aggs = {}
        headers.forEach((field) => {
            aggs[`${field}`] = {
                "filter": {
                    "exists": {
                        "field": field
                    },
                }
            };
            if (field === 'ANNOVAR_ensembl_Gene_ID') {
                aggs[`${field}_bar`] = {
                    "terms": { "field": field + ".keyword" },
                };
            }
            aggs[`pos_min`] = {
                "min": { "field": 'pos' },
            };
            aggs[`pos_max`] = {
                "max": { "field": 'pos' },
            };

        })

        query.aggs = aggs;

        switch (this.inputTypes.selected) {
            case this.inputType.chromosome:
                query.query = {
                    'bool': {
                        'filter': [
                            { 'term': { 'chr': annotationQuery.chrom } },
                            { 'range': { 'pos': { 'gte': annotationQuery.start, 'lte': annotationQuery.end } } }]
                    },
                }
                break;
            case this.inputType.geneProduct:
                this.httpClient.get(`${environment.annotationApi}/gene`, { params: { 'gene': annotationQuery.geneProduct } })
                    .subscribe((response) => {
                        const res: any = response;
                        query.query = {
                            'bool': {
                                'filter': [
                                    { 'term': { 'chr': res.gene_info.contig } },
                                    { 'range': { 'pos': { 'gte': res.gene_info.start, 'lte': res.gene_info.end } } }]
                            }
                        };
                        self.setOriginalQuery(query)
                        self.getSnpsCount(query);
                        self.getSnpsPage(query, page, res.gene_info);
                    });
                return;
            case this.inputType.rsID:
                query.query = {
                    'bool': {
                        'filter': [
                            { 'term': { 'rs_dbSNP151': annotationQuery.rsID } },
                        ]
                    }
                }
                break;
            case this.inputType.chromosomeList:
                const ids = annotationQuery.uploadList.ids.split("\n").filter(
                    (element, index, array) => {
                        const regex = /^#/;
                        return !(regex.test(element)) && element;
                    }
                ).map((s) => {
                    const line = s.trim().split('\t');
                    return `${line[0].replace('chr', '')}:${line[1]}${line[3]}>${line[4]}`;
                });

                query.query = {
                    "ids": {
                        "values": ids
                    }
                }
                break;
            /* 
                                query.ids = ids;
                                // console.log(query);
                                self.getSnpsCount(query);
                                this.httpClient.post(`${environment.annotationApi}/annoq-test-v2/ids`, query)
                                    .subscribe((response: any) => {
                                        const esData = response.hits.hits as [];
                                        const snpData = esData;
                                        this.snpPage.shallowRefresh();
                                        this.snpPage.query = query;
                                        // this.snpPage.total = 50;
                                        this.snpPage.size = self.snpResultsSize;;
                                        this.snpPage.snps = snpData;
                                        this.snpPage.vcfUrl = response.url;
                                        this.snpPage.source = query._source;
                                        this.onSnpsChanged.next(this.snpPage);
                                        self.loading = false;
                                        //console.log(response);
                                    });
                                return; */
            case this.inputType.keyword:
                query.query = {
                    "multi_match": {
                        "query": annotationQuery.keyword,
                        "fields": this.annotationService.keywordSearchableFields
                    }
                }
                break;

        }
        //console.log(query);


        self.setOriginalQuery(query)
        self.getSnpsPage(query, page);
        self.getSnpsCount(query);
    }

    setOriginalQuery(query) {
        this.queryOriginal = cloneDeep(query)
        this.queryOriginal.from = 0;
        this.queryOriginal.size = this.snpResultsSize;
    }


    getSnpsPage(query: any, page: number, gene?: any): any {
        const self = this;
        self.loading = true;
        query.from = (page - 1) * this.snpResultsSize;
        query.size = this.snpResultsSize;
        //console.log(query);
        this.query = query;
        return this.client.search({
            body: query
        }).then((body) => {
            if (body.hits.total.value > 0) {
                const esData = body.hits.hits as [];
                const snpData = esData.map((snp: any) => {
                    return snp._source;
                });

                this.snpPage.shallowRefresh();
                const posMinAgg = body.aggregations['pos_min'];
                const posMaxAgg = body.aggregations['pos_max'];

                if (posMinAgg && posMaxAgg) {
                    this.snpPage.posMin = posMinAgg.value;
                    this.snpPage.posMax = posMaxAgg.value;
                }


                this.snpPage.gene = gene;
                this.snpPage.query = query;
                this.snpPage.size = self.snpResultsSize;
                this.snpPage.snps = snpData;
                this.snpPage.aggs = body.aggregations;
                this.snpPage.source = query._source;


                this.onSnpsChanged.next(this.snpPage);
            } else {
                this.onSnpsChanged.next(null);
            }
            self.loading = false;
        }, (err) => {
            self.loading = false;
        });
    }

    getSnpsCount(query: any): any {
        const self = this;
        this.query = query;
        return this.client.count({
            body: { query: query.query }
        }).then((res) => {
            console.log(res)
            if (res?.count) {
                this.snpPage.total = res.count;
            }
        }, (err) => {
        });
    }

    querySnpAggs(query: any, field: string): any {
        const self = this;
        query.size = 0;
        //console.log(query);
        return this.client.search({
            body: query
        }).then((body) => {
            if (body.aggregations) {
                const snpAggs = new SnpAggs();

                snpAggs.field = field;
                snpAggs.aggs = body.aggregations;
                snpAggs.source = query._source;
                this.onSnpsAggsChanged.next(snpAggs);
            } else {
                this.onSnpsAggsChanged.next(null);
            }
        }, (err) => {
        });
    }

    addExistFilter(field) {
        if (!this.searchCriteria.fields.includes(field)) {
            this.searchCriteria.fields.push(field)
        }

        this.updateSearch();

    }

    updateSearch() {
        this.searchCriteria.updateFiltersCount();
        this.onSearchCriteriaChanged.next(this.searchCriteria);
        if (this.queryOriginal?.query?.bool?.filter) {
            const query = cloneDeep(this.snpPage.query)

            this.searchCriteria.fields.forEach(field => {
                query.query.bool.filter.push(
                    {
                        "exists": {
                            "field": field
                        }
                    });
            });
            this.getSnpsPage(query, 1);
            this.getSnpsCount(query)
        }


    }

    getStats(field: string) {
        const annotation = this.annotationService.findDetailByName(field);
        if (this.snpPage?.query?.query && annotation) {

            const query = cloneDeep(this.snpPage.query)
            const aggs = {}
            let fieldSearchable = field

            if (annotation.field_type === ColumnFieldType.TEXT) {
                fieldSearchable += '.keyword';
            }
            let interval = 10_000;

            if (this.snpPage?.posMin && this.snpPage?.posMax) {
                interval = (this.snpPage.posMax - this.snpPage.posMin) / 100;
            }

            aggs['pos_histogram'] = {
                "histogram": {
                    "field": "pos",
                    "interval": interval,
                    "extended_bounds": {
                        "min": this.snpPage.posMin,
                        "max": this.snpPage.posMax
                    }
                }
            }

            aggs[`${field}_missing`] = {
                "missing": {
                    "field": fieldSearchable,
                }
            };

            aggs[`${field}_exists`] = {
                "filter": {
                    "exists": {
                        "field": fieldSearchable
                    },
                }
            };
            aggs[`${field}_frequency`] = {
                "terms": { "field": fieldSearchable },
            };

            query.aggs = aggs;

            this.querySnpAggs(query, field);
        }
    }

    downloadSnp() {
        if (!this.query) {
            if (this.snpPage.vcfUrl) {
                this.onSnpsDownloadReady.next({ 'url': this.snpPage.vcfUrl });
            }
            return;
        }

        const url = `${environment.annotationApi}/total_res`;
        this.httpClient.post(url, this.query)
            .subscribe((response) => {
                this.onSnpsDownloadReady.next(response);
            });
    }

    isAvailable(): any {
        return this.client.ping({
            requestTimeout: Infinity,
            body: 'Hello JOAC Search!'
        });
    }

    buildSummaryTree(aggs) {

        const treeNodes = aggs.map((agg) => {
            const children = [
                {
                    name: agg.name,
                    label: "With Values",
                    count: agg.count
                }
            ]

            return {
                id: agg.name,
                label: agg.label,
                count: agg.count,
                name: agg.name,
                isCategory: true,
                children: children
            }
        })


        return treeNodes;
    }

    buildAnnotationBar(buckets: FrequencyBucket[]) {

        const stats = buckets.map((bucket) => {
            return {
                name: bucket.key,
                value: bucket.doc_count
            }
        })

        const sorted = orderBy(stats, ['value'], ['desc'])
        return sorted
    }


    buildAnnotationLine(buckets: FrequencyBucket[], name) {

        const series = buckets.map((bucket) => {
            return {
                name: bucket.key,
                value: bucket.doc_count
            }
        })


        return [{
            name,
            series
        }]
    }

    buildPosHistogramLine(buckets: FrequencyBucket[]) {

        const stats = buckets.map((bucket) => {
            return {
                name: bucket.key,
                value: bucket.doc_count
            }
        })

        const sorted = orderBy(stats, ['value'], ['desc'])
        return sorted
    }

    private _connect() {
        this.client = new Client({ host: `${environment.annotationApi}/${environment.dataset}` });
    }

}
