import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { SnpPage } from '../models/page';
import { cloneDeep, find, orderBy, uniqBy } from 'lodash';
import { AnnotationService } from '../../annotation/services/annotation.service';
import { ColumnValueType } from '@annoq.common/models/annotation';
import { SearchCriteria } from '@annoq.search/models/search-criteria';
import { Annotation } from '../../annotation/models/annotation';
import { UrlQueryParams } from '@annoq.common/models/query-params';

import pantherTerms from '@annoq.common/data/panther_terms.json';
import { Bucket, QueryTypeOption, SnpAggs, Query as GraphQLQueries } from 'generated/graphql';
import { AggsQueryArgs, CountQueryArgs, GeneInfoQuery, GraphQLQueryType, QueryFilterType, QueryFuncs, SNPQueryArgs } from '../models/graphql';

@Injectable({
    providedIn: 'root',
})
export class SnpService {
    snpResultsSize = environment.snpResultsSize;
    onSnpsChanged: BehaviorSubject<SnpPage>;
    onSnpsAggsChanged: BehaviorSubject<{field: keyof SnpAggs; snpAggs: SnpAggs}>;
    onDistinctAggsChanged: BehaviorSubject<SnpAggs>;
    onSnpChanged: BehaviorSubject<any>;
    onSearchCriteriaChanged: BehaviorSubject<any>;
    searchCriteria: SearchCriteria;
    onSnpsDownloadReady: BehaviorSubject<any>;
    snpPage: SnpPage = new SnpPage();
    loading = false;
    queryOriginal: GraphQLQueryType;
    query: GraphQLQueryType;

    initialSearchParams: UrlQueryParams = new UrlQueryParams();

    initialSelectedIds = [2, 3, 4, 5, 6]

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
        }, rsIDList: {
            id: 5,
            label: 'rsID List'
        }, keyword: {
            id: 6,
            label: 'Keyword Search'
        }
    };




    inputTypes: any = {
        options: [
            this.inputType.chromosome,
            this.inputType.chromosomeList,
            this.inputType.geneProduct,
            this.inputType.rsID,
            this.inputType.rsIDList,
            this.inputType.keyword
        ]
    };

    constructor(
        private readonly apollo: Apollo,
        private annotationService: AnnotationService) {
        this.onSnpsChanged = new BehaviorSubject(null);
        this.onSnpsAggsChanged = new BehaviorSubject(null);
        this.onDistinctAggsChanged = new BehaviorSubject(null);
        this.onSnpsDownloadReady = new BehaviorSubject(null);
        this.onSnpChanged = new BehaviorSubject(null);
        this.onSearchCriteriaChanged = new BehaviorSubject(null);
        this.inputTypes.selected = this.inputTypes.options[0];
        this.searchCriteria = new SearchCriteria();
    }

    selectInputType(inputType) {
        this.inputTypes.selected = inputType;
    }

    transformSnps(snps) {
        const results = snps.map(snp => {
            const transformedSnp = {}
            for (const k in snp) {
                const colDetail = this.annotationService.findDetailByName(k);

                if (colDetail?.value_type === ColumnValueType.TERM) {
                    const terms = snp[k].split(';').map((id) => {
                        return pantherTerms[id] ? pantherTerms[id] : { id, label: id }
                    })


                    const value = {
                        terms,
                        count: terms.length
                    }

                    transformedSnp[k] = value
                } else if (colDetail?.value_type === ColumnValueType.PANTHER_LONG_GENE_ID) {
                    const items = snp[k].split(';')
                    const value = {
                        items,
                        count: items.length
                    }
                    transformedSnp[k] = value
                } else if (typeof snp[k] === 'string' && snp[k]?.includes('|')) {
                    const items = snp[k].split('|')
                    const value = {
                        items,
                        count: items.length
                    }

                    console.log(value)

                    transformedSnp[k] = value

                } else {
                    transformedSnp[k] = snp[k]
                }
            }

            return transformedSnp
        })

        return results
    }

    getSnps(annotationQuery: any, page: number): any {
        const self = this;
        self.loading = true;

        let headers = uniqBy([...['chr', 'pos', 'ref', 'alt', 'rs_dbSNP151'], ...annotationQuery.source], (header) => {
            return header;
        });

        this.searchCriteria.clearSearch()
        this.searchCriteria = new SearchCriteria();

        // V2 GraphQL
        const graphqlQuery: GraphQLQueryType = {
            aggQuery: {
                fields: [],
                args: {} as AggsQueryArgs,
            },
            countQuery: {
                args: {} as CountQueryArgs,
            },
            snpQuery: {
                fields: [],
                args: {} as SNPQueryArgs,
            },
            queryFilterType: undefined,
            page_args: {}
        }

        headers.forEach((field: string) => {
            graphqlQuery.aggQuery.fields.push([field as any, field === 'pos' ? ['doc_count', 'min', 'max'] : ['doc_count']]);
            graphqlQuery.snpQuery.fields.push(field as any);
        });

        switch (this.inputTypes.selected) {
            case this.inputType.chromosome:
                graphqlQuery.aggQuery.args = {
                    chr: annotationQuery.chrom,
                    start: annotationQuery.start,
                    end: annotationQuery.end
                };
                graphqlQuery.countQuery.args = {
                    chr: annotationQuery.chrom,
                    start: annotationQuery.start,
                    end: annotationQuery.end
                };
                graphqlQuery.snpQuery.args = {
                    chr: annotationQuery.chrom,
                    start: annotationQuery.start,
                    end: annotationQuery.end,
                };
                graphqlQuery.queryFilterType = QueryFilterType.CHROMOSOME;

                break;

            case this.inputType.geneProduct:
       
                const geneInfoQuery = gql(`query geneInfoQuery {geneInfo: ${GeneInfoQuery}(${this.formatGraphQLArgs({ gene: annotationQuery.geneProduct })}){${['contig', 'end', 'start', 'gene_id'].join(',')}}}`);
                this.apollo.watchQuery({ query: geneInfoQuery })
                .valueChanges
                .subscribe(({data, loading}) => {
                    const response = data as any;
                    
                    graphqlQuery.aggQuery.args = {
                        gene: annotationQuery.geneProduct
                    };
                    graphqlQuery.countQuery.args = {
                        gene: annotationQuery.geneProduct
                    };
                    graphqlQuery.snpQuery.args = {
                        gene: annotationQuery.geneProduct,
                    };
                    graphqlQuery.queryFilterType = QueryFilterType.GENE_PRODUCT;
                    
                    self.setOriginalQuery(graphqlQuery)
                    self.getSnpsPage(graphqlQuery, page, response.geneInfo);
                });
                return;

            case this.inputType.rsID:
                graphqlQuery.aggQuery.args = {
                    rsID: annotationQuery.rsID
                };
                graphqlQuery.countQuery.args = {
                    rsID: annotationQuery.rsID
                };
                graphqlQuery.snpQuery.args = {
                    rsID: annotationQuery.rsID,
                };
                graphqlQuery.queryFilterType = QueryFilterType.RSID;
                break;

            case this.inputType.rsIDList:
                const rsIDs = annotationQuery.rsIDList.ids.split("\n").filter(
                    (element, index, array) => {
                        const regex = /^#/;
                        return !(regex.test(element)) && element;
                    }
                ).map((line) => {
                    return line.trim();
                });

                graphqlQuery.aggQuery.args = {
                    rsIDs
                };
                graphqlQuery.countQuery.args = {
                    rsIDs
                };
                graphqlQuery.snpQuery.args = {
                    rsIDs,
                };
                graphqlQuery.queryFilterType = QueryFilterType.RSIDS;
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

                graphqlQuery.aggQuery.args = {
                    ids
                };
                graphqlQuery.countQuery.args = {
                    ids
                };
                graphqlQuery.snpQuery.args = {
                    ids,
                };
                graphqlQuery.queryFilterType = QueryFilterType.IDS;
                break;

            case this.inputType.keyword:
                graphqlQuery.aggQuery.args = {
                    keyword: annotationQuery.keyword
                };
                graphqlQuery.countQuery.args = {
                    keyword: annotationQuery.keyword
                };
                graphqlQuery.snpQuery.args = {
                    keyword: annotationQuery.keyword,
                };
                graphqlQuery.queryFilterType = QueryFilterType.KEYWORD;
                break;

        }

        self.setOriginalQuery(graphqlQuery)
        self.getSnpsPage(graphqlQuery, page);
    }

    setOriginalQuery(query: GraphQLQueryType) {
        this.queryOriginal = cloneDeep(query)
        this.queryOriginal.page_args.from_ = 0;
        this.queryOriginal.page_args.size = this.snpResultsSize;
    }


    getSnpsPage(query: GraphQLQueryType, page: number, gene?: any): any {
        const self = this;
        self.loading = true;

        query.page_args.from_ = (page - 1) * this.snpResultsSize;
        query.page_args.size = this.snpResultsSize;

        this.query = query;

        let queryFuncs = QueryFuncs[this.query.queryFilterType];
        let queryStr = `query pagequery {
            count: ${queryFuncs.count}(${this.formatGraphQLArgs(query.countQuery.args)})\n
            snps: ${queryFuncs.snps}(${this.formatGraphQLArgs(query.snpQuery.args)}, query_type_option: SNPS, page_args: {from_: ${query.page_args.from_}, size: ${query.page_args.size}}) {${this.formatSNPsQueryFields(query.snpQuery.fields)}} \n
            aggs: ${queryFuncs.aggs}(${this.formatGraphQLArgs(query.aggQuery.args)}) {${this.formatAggsQueryFields(query.aggQuery.fields)}} \n
        }`;
        return this.apollo.watchQuery({ query: gql(queryStr) }).valueChanges.subscribe({
            next: ({data, loading}) => {
                const result = data as Record<'count'| 'snps'| 'aggs', any>;
                if (!(result?.count && result?.snps && result?.aggs)) {
                    self.loading = false;
                    return;
                }

                const count = result.count as GraphQLQueries['count_SNPs_by_chromosome'];
                const snps = result.snps as GraphQLQueries['get_SNPs_by_chromosome'];
                const aggs = result.aggs as GraphQLQueries['get_aggs_by_chromosome'];

                if (snps.snps.length) {
                    this.snpPage.shallowRefresh();

                    this.snpPage.total = count;

                    const posMinAgg = aggs.pos?.min;
                    const posMaxAgg = aggs.pos?.max;
                    if (posMinAgg && posMaxAgg) {
                        this.snpPage.posMin = posMinAgg;
                        this.snpPage.posMax = posMaxAgg;
                    }


                    this.snpPage.gene = gene;

                    this.snpPage.query = query;
                    this.snpPage.size = self.snpResultsSize;

                    this.snpPage.snps = this.transformSnps(snps.snps);

                    this.snpPage.aggs = aggs;

                    this.snpPage.source = query.snpQuery.fields;


                    this.onSnpsChanged.next(this.snpPage);
                } else {
                    this.onSnpsChanged.next(null);
                }
                self.loading = false;
            },
            error: (err) => {
                self.loading = false;
                console.warn(err);
            }
        });
    }

    querySnpAggs(query: GraphQLQueryType, field: string): any {
        const self = this;

        let queryFuncs = QueryFuncs[this.query.queryFilterType];
        let queryStr = `query aggsquery {
            aggs: ${queryFuncs.aggs}(${this.formatGraphQLArgs(query.aggQuery.args)}) {${this.formatAggsQueryFields(query.aggQuery.fields)}} \n
        }`;

        return this.apollo.watchQuery({ query: gql(queryStr) }).valueChanges.subscribe({
            next: ({data, loading}) => {
                const result = data as Record<'aggs', any>;
                
                if (result?.aggs) {
                    const aggs = result.aggs as GraphQLQueries['get_aggs_by_chromosome'];
                    this.onSnpsAggsChanged.next({field: field as keyof SnpAggs, snpAggs: aggs});
                } else {
                    this.onSnpsAggsChanged.next(null);
                }
            },
            error: (err) => {
                console.warn(err);
            }
        });
    }

    addExistFilter(field) {
        const exist = find(this.searchCriteria.fields, ((f: Annotation) => {
            return field.name === f.name;
        }));

        if (!exist) {
            this.searchCriteria.fields.push(field)
        }

        this.updateSearch();
    }

    updateSearch() {
        this.searchCriteria.updateFiltersCount();
        this.onSearchCriteriaChanged.next(this.searchCriteria);
        if (this.queryOriginal?.queryFilterType !== QueryFilterType.KEYWORD) {

            const query = cloneDeep(this.queryOriginal)
            
            const filter_args = {
                exists: this.searchCriteria.fields.map((field: Annotation) => field.name)
            }

            query.snpQuery.args = {
                ...query.snpQuery.args,
                filter_args
            }

            query.aggQuery.args = {
                ...query.aggQuery.args,
                filter_args
            }

            query.countQuery.args = {
                ...query.countQuery.args,
                filter_args
            }

            this.getSnpsPage(query, 1);
        }
    }

    getStats(field: string) {
        const annotation = this.annotationService.findDetailByName(field);
        if (this.snpPage?.query?.aggQuery && annotation) {

            const query = cloneDeep(this.snpPage.query)

            let interval = 10_000;

            if (this.snpPage?.posMin && this.snpPage?.posMax) {
                interval = (this.snpPage.posMax - this.snpPage.posMin) / 100;
            }

            query.aggQuery.args.histogram = {
                interval,
                max: this.snpPage.posMax,
                min: this.snpPage.posMin
            };

            query.aggQuery.fields = [
                ['pos', ['histogram']],
                [field as keyof SnpAggs, ['missing', 'frequency', 'doc_count']]
            ]

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

        const queryStr = `query downloadquery {down: ${QueryFuncs[this.query.queryFilterType].download}(${this.formatGraphQLArgs({ ...this.query.snpQuery.args, fields: this.query.snpQuery.fields })})}`
        this.apollo.watchQuery({ query: gql(queryStr) })
            .valueChanges
            .subscribe(({data, loading}) => {
                this.onSnpsDownloadReady.next({'url': (data as any)?.down});
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

    buildAnnotationBar(buckets: Bucket[]) {

        const stats = buckets.map((bucket) => {
            return {
                name: bucket.key,
                value: bucket.doc_count
            }
        })

        const sorted = orderBy(stats, ['value'], ['desc'])
        return sorted
    }


    buildAnnotationLine(buckets: Bucket[], name) {

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

    buildPosHistogramLine(buckets: Bucket[]) {

        const stats = buckets.map((bucket) => {
            return {
                name: bucket.key,
                value: bucket.doc_count
            }
        })

        const sorted = orderBy(stats, ['value'], ['desc'])
        return sorted
    }

    private formatAggsQueryFields(fields: GraphQLQueryType['aggQuery']['fields']) {
        return fields.map(([field, aggs_fields]) =>
            `${field} {${aggs_fields.map(agg_field => {
                switch (agg_field) {
                    case 'frequency':
                    case 'histogram':
                        return `${agg_field} {key, doc_count}`;
                    case 'missing':
                        return `${agg_field} {doc_count}`;
                    default:
                        return agg_field;
                }
            }).join(',')}}`
        ).join(',');
    }

    private formatSNPsQueryFields(fields: GraphQLQueryType['snpQuery']['fields']) {
        return `snps {${fields.join(',')}}`
    }

    /** Create a string for the arguments in a graphql query 
     * Performs the conversion in a recursive manner
     * For now, handles only objects of type bool, string, numbers, and recursive objects
     * No enum support
    */
    private formatGraphQLArgs(args: Object): string {
        const formatValue = (val: any): string => {
            return `${Array.isArray(val) ? '[' + this.formatGraphQLArgs(val) + ']' : typeof val === 'object' ? '{' + this.formatGraphQLArgs(val) + '}' : typeof val === 'string' ? '"' + val + '"' : val}`
        };
        return Object.entries(args)
            .map(([key, val]) =>
                Array.isArray(args) ? formatValue(val) : `${key}: ${formatValue(val)}`
            )
            .join(',');
    }
}
