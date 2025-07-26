import { AggregationItem, PageArgs, QueryCount_SnPs_By_ChromosomeArgs, QueryCount_SnPs_By_Gene_ProductArgs, QueryCount_SnPs_By_IDsArgs, QueryCount_SnPs_By_RsIdArgs, QueryCount_SnPs_By_RsIDsArgs, QueryGet_Aggs_By_ChromosomeArgs, QueryGet_Aggs_By_Gene_ProductArgs, QueryGet_Aggs_By_IDsArgs, QueryGet_Aggs_By_RsIdArgs, QueryGet_Aggs_By_RsIDsArgs, QueryGet_SnPs_By_ChromosomeArgs, QueryGet_SnPs_By_Gene_ProductArgs, QueryGet_SnPs_By_IDsArgs, QueryGet_SnPs_By_RsIdArgs, QueryGet_SnPs_By_RsIDsArgs, Snp, SnpAggs, Query as GraphQLQueries, QueryGet_Aggs_By_KeywordArgs, QueryCount_SnPs_By_KeywordArgs, QueryGet_SnPs_By_KeywordArgs, QueryGene_InfoArgs } from "generated/graphql";
export type AggsQueryArgs = QueryGet_Aggs_By_IDsArgs | QueryGet_Aggs_By_ChromosomeArgs | QueryGet_Aggs_By_RsIDsArgs | QueryGet_Aggs_By_RsIdArgs | QueryGet_Aggs_By_Gene_ProductArgs | QueryGet_Aggs_By_KeywordArgs
export type CountQueryArgs = QueryCount_SnPs_By_IDsArgs | QueryCount_SnPs_By_ChromosomeArgs | QueryCount_SnPs_By_RsIDsArgs | QueryCount_SnPs_By_RsIdArgs | QueryCount_SnPs_By_Gene_ProductArgs | QueryCount_SnPs_By_KeywordArgs
export type SNPQueryArgs = Omit<QueryGet_SnPs_By_IDsArgs, "query_type_option"> | Omit<QueryGet_SnPs_By_ChromosomeArgs, "query_type_option"> | Omit<QueryGet_SnPs_By_RsIDsArgs, "query_type_option"> | Omit<QueryGet_SnPs_By_RsIdArgs, "query_type_option"> | Omit<QueryGet_SnPs_By_Gene_ProductArgs, "query_type_option"> | Omit<QueryGet_SnPs_By_KeywordArgs, "query_type_option">
export enum QueryFilterType {
    IDS = 'IDS',
    RSID = 'RSID',
    RSIDS = 'RSIDS',
    CHROMOSOME = 'CHROMOSOME',
    GENE_PRODUCT = 'GENE_PRODUCT',
    KEYWORD = 'KEYWORD',
    GENE_ID = 'GENE_ID'
}

export type GraphQLQueryType = {
    aggQuery?: {
        fields: [keyof SnpAggs, Array<keyof AggregationItem>][],
        args: AggsQueryArgs,
    },
    countQuery?: {
        args: CountQueryArgs,
    },
    snpQuery?: {
        fields: Array<keyof Snp>,
        args: SNPQueryArgs,
    },
    queryFilterType?: QueryFilterType,
    page_args?: PageArgs
}

export const QueryFuncs: Record<QueryFilterType, Record<"count" | "aggs" | "snps" | "download", keyof GraphQLQueries>> = {
    CHROMOSOME: {
        count: "count_SNPs_by_chromosome",
        aggs: "get_aggs_by_chromosome",
        snps: "get_SNPs_by_chromosome",
        download: "download_SNPs_by_chromosome",
    },
    GENE_PRODUCT: {
        count: "count_SNPs_by_gene_product",
        aggs: "get_aggs_by_gene_product",
        snps: "get_SNPs_by_gene_product",
        download: "download_SNPs_by_gene_product",
    },
    RSID: {
        count: "count_SNPs_by_RsID",
        aggs: "get_aggs_by_RsID",
        snps: "get_SNPs_by_RsID",
        download: "download_SNPs_by_RsID",
    },
    RSIDS: {
        count: "count_SNPs_by_RsIDs",
        aggs: "get_aggs_by_RsIDs",
        snps: "get_SNPs_by_RsIDs",
        download: "download_SNPs_by_RsIDs",

    },
    IDS: {
        count: "count_SNPs_by_IDs",
        aggs: "get_aggs_by_IDs",
        snps: "get_SNPs_by_IDs",
        download: "download_SNPs_by_IDs",
    },
    KEYWORD: {
        count: "count_SNPs_by_keyword",
        aggs: "get_aggs_by_keyword",
        snps: "get_SNPs_by_keyword",
        download: "download_SNPs_by_keyword",
    },
    GENE_ID: {
        count: "count_SNPs_by_gene_id",
        aggs: "get_aggs_by_gene_id",
        snps: "get_SNPs_by_gene_id",
        download: "download_SNPs_by_gene_id",
    }    
}

export const GeneInfoQuery = "gene_info"

export type GeneInfoQueryArgs = QueryGene_InfoArgs