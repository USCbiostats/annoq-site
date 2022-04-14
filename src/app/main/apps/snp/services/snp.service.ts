import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from 'elasticsearch-browser';
import { SnpPage } from '../models/page';
import { cloneDeep, orderBy, uniqBy } from 'lodash';
import { FrequencyBucket, SnpAggs } from '../models/snp-aggs';

@Injectable({
    providedIn: 'root',
})
export class SnpService {
    snpResultsSize = environment.snpResultsSize;
    onSnpsChanged: BehaviorSubject<SnpPage>;
    onSnpsAggsChanged: BehaviorSubject<SnpAggs>;
    onSnpChanged: BehaviorSubject<any>;
    onSnpsDownloadReady: BehaviorSubject<any>;
    snpPage: SnpPage;
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

    constructor(private httpClient: HttpClient) {
        this.onSnpsChanged = new BehaviorSubject(null);
        this.onSnpsAggsChanged = new BehaviorSubject(null);
        this.onSnpsDownloadReady = new BehaviorSubject(null);
        this.onSnpChanged = new BehaviorSubject(null);
        this.inputTypes.selected = this.inputTypes.options[0];

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
        })

        /*    aggs['pos_agg'] = {
               "terms": { "field": "ANNOVAR_ensembl_Gene_ID", "size": 25 }
           } */

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
                        return self.getSnpsPage(query, page, res.gene_info);
                    });
                return;
            case this.inputType.rsID:
                {//    q = rs_dbSNP151:% 22rs555419020 % 22
                    query.query = {
                        'bool': {
                            'filter': [
                                { 'term': { 'rs_dbSNP151': annotationQuery.rsID } },
                            ]
                        }
                    }
                    break;
                }
            case this.inputType.chromosomeList:
                {
                    const ids = annotationQuery.uploadList.ids.split("\n").filter(
                        (element, index, array) => {
                            const regex = /^#/;
                            return !(regex.test(element)) && element;
                        }
                    ).map((s) => {
                        const line = s.trim().split('\t');
                        return `${line[0].replace('chr', '')}:${line[1]}${line[3]}>${line[4]}`;
                    });

                    query.ids = ids;
                    // console.log(query);
                    this.httpClient.post(`${environment.annotationApi}/annoq-test-v2/ids`, query)
                        .subscribe((response: any) => {
                            const snpPage = new SnpPage();
                            const esData = response.hits.hits as [];
                            const snpData = esData;
                            snpPage.query = query;
                            snpPage.total = 50;
                            snpPage.size = 50;
                            snpPage.snps = snpData;
                            snpPage.vcfUrl = response.url;
                            snpPage.source = query._source;
                            this.snpPage = snpPage;
                            this.onSnpsChanged.next(snpPage);
                            self.loading = false;
                            //console.log(response);
                        });
                    return;
                }
            case this.inputType.keyword:
                {
                    query.query = {
                        "multi_match": {
                            "query": annotationQuery.keyword,
                        }
                    }
                    break;
                }


        }
        //console.log(query);
        return self.getSnpsPage(query, page);
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
                const snpPage = new SnpPage();
                const esData = body.hits.hits as [];
                const snpData = esData.map((snp: any) => {
                    return snp._source;
                });

                //console.log(gene);
                snpPage.gene = gene;
                snpPage.query = query;
                snpPage.total = body.hits.total.value;
                snpPage.size = self.snpResultsSize;
                snpPage.snps = snpData;
                snpPage.aggs = body.aggregations;
                snpPage.source = query._source;
                this.snpPage = snpPage;
                this.onSnpsChanged.next(snpPage);
            } else {
                this.onSnpsChanged.next(null);
            }
            self.loading = false;
        }, (err) => {
            self.loading = false;
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
            self.loading = false;
        });
    }

    addExistFilter(field) {
        if (this.snpPage?.query.query?.bool?.filter)
            this.snpPage.query.query.bool.filter.push(
                {
                    "exists": {
                        "field": field
                    }
                });
        this.getSnpsPage(this.snpPage.query, 1);
    }

    getStats(field: string) {
        if (this.snpPage?.query?.query) {

            const query = cloneDeep(this.snpPage.query)

            const aggs = {}
            aggs[`${field}`] = {
                "filter": {
                    "exists": {
                        "field": field
                    },
                }
            };
            aggs[`${field}_frequency`] = {
                "terms": { "field": field + ".keyword" },
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

    private _connect() {
        this.client = new Client({ host: `${environment.annotationApi}/${environment.dataset}` });
    }

}
