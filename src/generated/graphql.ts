export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AggregationItem = {
  __typename?: 'AggregationItem';
  doc_count: Scalars['Int']['output'];
  frequency?: Maybe<Array<Bucket>>;
  histogram?: Maybe<Array<Bucket>>;
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
  missing?: Maybe<DocCount>;
};

export type Bucket = {
  __typename?: 'Bucket';
  doc_count: Scalars['Int']['output'];
  key: Scalars['String']['output'];
};

export type DocCount = {
  __typename?: 'DocCount';
  /** The number of records from the operation */
  doc_count: Scalars['Int']['output'];
};

/** specifies list of attributes that should not be null for a record to be returned */
export type FilterArgs = {
  exists?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type Gene = {
  __typename?: 'Gene';
  contig: Scalars['String']['output'];
  end: Scalars['Int']['output'];
  gene_id: Scalars['String']['output'];
  start: Scalars['Int']['output'];
};

export type Histogram = {
  interval?: InputMaybe<Scalars['Float']['input']>;
  max?: InputMaybe<Scalars['Int']['input']>;
  min?: InputMaybe<Scalars['Int']['input']>;
};

/** Specifies the record number to start from and the maximum number of records to output */
export type PageArgs = {
  from_?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  __typename?: 'Query';
  annotations: ScrollSnp;
  count_SNPs_by_IDs: Scalars['Int']['output'];
  count_SNPs_by_RsID: Scalars['Int']['output'];
  count_SNPs_by_RsIDs: Scalars['Int']['output'];
  count_SNPs_by_chromosome: Scalars['Int']['output'];
  count_SNPs_by_gene_product: Scalars['Int']['output'];
  count_SNPs_by_keyword: Scalars['Int']['output'];
  count_annotations: Scalars['Int']['output'];
  download_SNPs_by_IDs: Scalars['String']['output'];
  download_SNPs_by_RsID: Scalars['String']['output'];
  download_SNPs_by_RsIDs: Scalars['String']['output'];
  download_SNPs_by_chromosome: Scalars['String']['output'];
  download_SNPs_by_gene_product: Scalars['String']['output'];
  download_SNPs_by_keyword: Scalars['String']['output'];
  download_annotations: Scalars['String']['output'];
  gene_info: Gene;
  get_SNPs_by_IDs: ScrollSnp;
  get_SNPs_by_RsID: ScrollSnp;
  get_SNPs_by_RsIDs: ScrollSnp;
  get_SNPs_by_chromosome: ScrollSnp;
  get_SNPs_by_gene_product: ScrollSnp;
  get_SNPs_by_keyword: ScrollSnp;
  get_aggs_by_IDs: SnpAggs;
  get_aggs_by_RsID: SnpAggs;
  get_aggs_by_RsIDs: SnpAggs;
  get_aggs_by_chromosome: SnpAggs;
  get_aggs_by_gene_product: SnpAggs;
  get_aggs_by_keyword: SnpAggs;
  scroll_annotations: ScrollSnp;
};


export type QueryCount_SnPs_By_IDsArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  ids: Array<Scalars['String']['input']>;
};


export type QueryCount_SnPs_By_RsIdArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  rsID: Scalars['String']['input'];
};


export type QueryCount_SnPs_By_RsIDsArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  rsIDs: Array<Scalars['String']['input']>;
};


export type QueryCount_SnPs_By_ChromosomeArgs = {
  chr: Scalars['String']['input'];
  end: Scalars['Int']['input'];
  filter_args?: InputMaybe<FilterArgs>;
  start: Scalars['Int']['input'];
};


export type QueryCount_SnPs_By_Gene_ProductArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  gene: Scalars['String']['input'];
};


export type QueryCount_SnPs_By_KeywordArgs = {
  keyword: Scalars['String']['input'];
};


export type QueryDownload_SnPs_By_IDsArgs = {
  fields: Array<Scalars['String']['input']>;
  filter_args?: InputMaybe<FilterArgs>;
  ids: Array<Scalars['String']['input']>;
  page_args?: InputMaybe<PageArgs>;
};


export type QueryDownload_SnPs_By_RsIdArgs = {
  fields: Array<Scalars['String']['input']>;
  filter_args?: InputMaybe<FilterArgs>;
  page_args?: InputMaybe<PageArgs>;
  rsID: Scalars['String']['input'];
};


export type QueryDownload_SnPs_By_RsIDsArgs = {
  fields: Array<Scalars['String']['input']>;
  filter_args?: InputMaybe<FilterArgs>;
  page_args?: InputMaybe<PageArgs>;
  rsIDs: Array<Scalars['String']['input']>;
};


export type QueryDownload_SnPs_By_ChromosomeArgs = {
  chr: Scalars['String']['input'];
  end: Scalars['Int']['input'];
  fields: Array<Scalars['String']['input']>;
  filter_args?: InputMaybe<FilterArgs>;
  page_args?: InputMaybe<PageArgs>;
  start: Scalars['Int']['input'];
};


export type QueryDownload_SnPs_By_Gene_ProductArgs = {
  fields: Array<Scalars['String']['input']>;
  filter_args?: InputMaybe<FilterArgs>;
  gene: Scalars['String']['input'];
  page_args?: InputMaybe<PageArgs>;
};


export type QueryDownload_SnPs_By_KeywordArgs = {
  fields: Array<Scalars['String']['input']>;
  keyword: Scalars['String']['input'];
  page_args?: InputMaybe<PageArgs>;
};


export type QueryDownload_AnnotationsArgs = {
  fields: Array<Scalars['String']['input']>;
};


export type QueryGene_InfoArgs = {
  gene: Scalars['String']['input'];
};


export type QueryGet_SnPs_By_IDsArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  ids: Array<Scalars['String']['input']>;
  page_args?: InputMaybe<PageArgs>;
  query_type_option: QueryTypeOption;
};


export type QueryGet_SnPs_By_RsIdArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  page_args?: InputMaybe<PageArgs>;
  query_type_option: QueryTypeOption;
  rsID: Scalars['String']['input'];
};


export type QueryGet_SnPs_By_RsIDsArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  page_args?: InputMaybe<PageArgs>;
  query_type_option: QueryTypeOption;
  rsIDs: Array<Scalars['String']['input']>;
};


export type QueryGet_SnPs_By_ChromosomeArgs = {
  chr: Scalars['String']['input'];
  end: Scalars['Int']['input'];
  filter_args?: InputMaybe<FilterArgs>;
  page_args?: InputMaybe<PageArgs>;
  query_type_option: QueryTypeOption;
  start: Scalars['Int']['input'];
};


export type QueryGet_SnPs_By_Gene_ProductArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  gene: Scalars['String']['input'];
  page_args?: InputMaybe<PageArgs>;
  query_type_option: QueryTypeOption;
};


export type QueryGet_SnPs_By_KeywordArgs = {
  keyword: Scalars['String']['input'];
  page_args?: InputMaybe<PageArgs>;
  query_type_option: QueryTypeOption;
};


export type QueryGet_Aggs_By_IDsArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  histogram?: InputMaybe<Histogram>;
  ids: Array<Scalars['String']['input']>;
  page_args?: InputMaybe<PageArgs>;
};


export type QueryGet_Aggs_By_RsIdArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  histogram?: InputMaybe<Histogram>;
  page_args?: InputMaybe<PageArgs>;
  rsID: Scalars['String']['input'];
};


export type QueryGet_Aggs_By_RsIDsArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  histogram?: InputMaybe<Histogram>;
  page_args?: InputMaybe<PageArgs>;
  rsIDs: Array<Scalars['String']['input']>;
};


export type QueryGet_Aggs_By_ChromosomeArgs = {
  chr: Scalars['String']['input'];
  end: Scalars['Int']['input'];
  filter_args?: InputMaybe<FilterArgs>;
  histogram?: InputMaybe<Histogram>;
  page_args?: InputMaybe<PageArgs>;
  start: Scalars['Int']['input'];
};


export type QueryGet_Aggs_By_Gene_ProductArgs = {
  filter_args?: InputMaybe<FilterArgs>;
  gene: Scalars['String']['input'];
  histogram?: InputMaybe<Histogram>;
  page_args?: InputMaybe<PageArgs>;
};


export type QueryGet_Aggs_By_KeywordArgs = {
  histogram?: InputMaybe<Histogram>;
  keyword: Scalars['String']['input'];
  page_args?: InputMaybe<PageArgs>;
};


export type QueryScroll_AnnotationsArgs = {
  scroll_id?: InputMaybe<Scalars['String']['input']>;
};

export enum QueryTypeOption {
  Scroll = 'SCROLL',
  Snps = 'SNPS'
}

export type ScrollSnp = {
  __typename?: 'ScrollSnp';
  scroll_id?: Maybe<Scalars['String']['output']>;
  snps: Array<Snp>;
};

export type Snp = {
  __typename?: 'Snp';
  /** Alternative allele count in called genotypes in UK10K ALSPAC cohort (The Avon Longitudinal Study of Parents and Children). */
  ALSPAC_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in called genotypes in UK10K ALSPAC cohort. */
  ALSPAC_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in called genotypes in UK10K ALSPAC cohort. */
  ALSPAC_AN?: Maybe<Scalars['Int']['output']>;
  /** cloest genes if the variant is intergenic.\nFormat gene ID1:transcript ID1(dist=distance),gene ID2:transcript ID2(dist=distance)\ngene ID1:transcript ID1(dist=distance),gene ID2:transcript ID2(dist=distance) */
  ANNOVAR_ensembl_Closest_gene?: Maybe<Scalars['String']['output']>;
  /** ANNOVAR consequence with Ensembl as gene model.\nMultiple consequences are separated by "|" The order corresponds to ANNOVAR_ensembl_Transcript_ID\nThe order corresponds to ANNOVAR_ensembl_Transcript_ID */
  ANNOVAR_ensembl_Effect?: Maybe<Scalars['String']['output']>;
  /** exon number the variant locates (if applicable)\nMultiple annotations are separated by "|" The order corresponds to ANNOVAR_ensembl_Transcript_ID\nThe order corresponds to ANNOVAR_ensembl_Transcript_ID */
  ANNOVAR_ensembl_Exon_Rank?: Maybe<Scalars['String']['output']>;
  /** The complete GO biological process annotations queried through PANTHER API for IDs corresponding to ANNOVAR_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  ANNOVAR_ensembl_GO_biological_process_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO cellular component annotations queried through PANTHER API for IDs corresponding to ANNOVAR_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  ANNOVAR_ensembl_GO_cellular_component_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO molecular function annotations queried through PANTHER API for IDs corresponding to ANNOVAR_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  ANNOVAR_ensembl_GO_molecular_function_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** Ensembl gene IDs corresponding to transcripts. Multiple IDs are separated by "|". The order corresponds to ANNOVAR_ensembl_Transcript_ID. The gene IDs can be the same for different transcript IDs. */
  ANNOVAR_ensembl_Gene_ID?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSc. Multiple annotations are separated by "|". The order corresponds to ANNOVAR_ensembl_Transcript_ID. */
  ANNOVAR_ensembl_HGVSc?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSp. Multiple annotations are separated by "|". The order corresponds to ANNOVAR_ensembl_Transcript_ID. */
  ANNOVAR_ensembl_HGVSp?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Biological Process annotations queried through PANTHER API for IDs corresponding to ANNOVAR_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  ANNOVAR_ensembl_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Cellular Component annotations queried through PANTHER API for IDs corresponding to ANNOVAR_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  ANNOVAR_ensembl_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Molecular Function annotations queried through PANTHER API for IDs corresponding to ANNOVAR_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  ANNOVAR_ensembl_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER pathway annotations queried through PANTHER API for IDs corresponding to ANNOVAR_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Pathways from all genes is shown here. */
  ANNOVAR_ensembl_PANTHER_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Protein Class annotations queried through PANTHER API for IDs corresponding to ANNOVAR_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Protein Class terms from all genes is shown here. */
  ANNOVAR_ensembl_PANTHER_protein_class_list_id?: Maybe<Scalars['String']['output']>;
  /** The Reactome Pathway annotations queried through PANTHER API for IDs corresponding to ANNOVAR_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of Reactome Pathways from all genes is shown here. */
  ANNOVAR_ensembl_REACTOME_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** Ensembl transcript IDs corresponding to consequences.\nMultiple IDs are separated by "|" */
  ANNOVAR_ensembl_Transcript_ID?: Maybe<Scalars['String']['output']>;
  /** ANNOVAR consequence summary with Ensembl as gene model.\nFormat GeneID(total number of transcripts):consequence#1(number of transcripts affected) consequence#2(number of transcripts affected)... Multiple genes are separated by "|"\nGeneID(total number of transcripts):consequence#1(number of transcripts affected)\nconsequence#2(number of transcripts affected)... Multiple genes are separated by "|" */
  ANNOVAR_ensembl_summary?: Maybe<Scalars['String']['output']>;
  /** cloest genes if the variant is intergenic.\nFormat gene ID1:transcript ID1(dist=distance),gene ID2:transcript ID2(dist=distance)\ngene ID1:transcript ID1(dist=distance),gene ID2:transcript ID2(dist=distance) */
  ANNOVAR_refseq_Closest_gene?: Maybe<Scalars['String']['output']>;
  /** ANNOVAR consequence with RefSeq as gene model.\nMultiple consequences are separated by "|" The order corresponds to ANNOVAR_refseq_Transcript_ID\nThe order corresponds to ANNOVAR_refseq_Transcript_ID */
  ANNOVAR_refseq_Effect?: Maybe<Scalars['String']['output']>;
  /** exon number the variant locates (if applicable)\nMultiple annotations are separated by "|" The order corresponds to ANNOVAR_refseq_Transcript_ID\nThe order corresponds to ANNOVAR_refseq_Transcript_ID */
  ANNOVAR_refseq_Exon_Rank?: Maybe<Scalars['String']['output']>;
  /** The complete GO biological process annotations queried through PANTHER API for IDs corresponding to  ANNOVAR_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  ANNOVAR_refseq_GO_biological_process_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO cellular component annotations queried through PANTHER API for IDs corresponding to ANNOVAR_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  ANNOVAR_refseq_GO_cellular_component_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO molecular function annotations queried through PANTHER API for IDs corresponding to ANNOVAR_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  ANNOVAR_refseq_GO_molecular_function_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** RefSeq gene IDs corresponding to transcripts.\nMultiple IDs are separated by "|" The order corresponds to ANNOVAR_refseq_Transcript_ID\nThe order corresponds to ANNOVAR_refseq_Transcript_ID */
  ANNOVAR_refseq_Gene_ID?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSc.\nMultiple annotations are separated by "|" The order corresponds to ANNOVAR_refseq_Transcript_ID\nThe order corresponds to ANNOVAR_refseq_Transcript_ID */
  ANNOVAR_refseq_HGVSc?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSp.\nMultiple annotations are separated by "|" The order corresponds to ANNOVAR_refseq_Transcript_ID\nThe order corresponds to ANNOVAR_refseq_Transcript_ID */
  ANNOVAR_refseq_HGVSp?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Biological Process annotations queried through PANTHER API for IDs corresponding to ANNOVAR_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here.. */
  ANNOVAR_refseq_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Cellular Component annotations queried through PANTHER API for IDs corresponding to ANNOVAR_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  ANNOVAR_refseq_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Molecular Function annotations queried through PANTHER API for IDs corresponding to ANNOVAR_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  ANNOVAR_refseq_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER pathway annotations queried through PANTHER API for IDs corresponding to ANNOVAR_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Pathways from all genes is shown here. */
  ANNOVAR_refseq_PANTHER_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Protein Class annotations queried through PANTHER API for IDs corresponding to ANNOVAR_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Protein Class terms from all genes is shown here. */
  ANNOVAR_refseq_PANTHER_protein_class_list_id?: Maybe<Scalars['String']['output']>;
  /** The Reactome Pathway annotations queried through PANTHER API for IDs corresponding to ANNOVAR_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of Reactome Pathways from all genes is shown here. */
  ANNOVAR_refseq_REACTOME_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** RefSeq transcript IDs corresponding to consequences.\nMultiple IDs are separated by "|" */
  ANNOVAR_refseq_Transcript_ID?: Maybe<Scalars['String']['output']>;
  /** ANNOVAR consequence summary with RefSeq as gene model.\nFormat GeneID(total number of transcripts):consequence#1(number of transcripts affected) consequence#2(number of transcripts affected)... Multiple genes are separated by "|"\nGeneID(total number of transcripts):consequence#1(number of transcripts affected)\nconsequence#2(number of transcripts affected)... Multiple genes are separated by "|" */
  ANNOVAR_refseq_summary?: Maybe<Scalars['String']['output']>;
  /** cloest genes if the variant is intergenic.\nFormat gene ID1:transcript ID1(dist=distance),gene ID2:transcript ID2(dist=distance)\ngene ID1:transcript ID1(dist=distance),gene ID2:transcript ID2(dist=distance) */
  ANNOVAR_ucsc_Closest_gene?: Maybe<Scalars['String']['output']>;
  /** ANNOVAR consequence with UCSC knownGene as gene model.\nMultiple consequences are separated by "|" The order corresponds to ANNOVAR_ucsc_Transcript_ID\nThe order corresponds to ANNOVAR_ucsc_Transcript_ID */
  ANNOVAR_ucsc_Effect?: Maybe<Scalars['String']['output']>;
  /** exon number the variant locates (if applicable)\nMultiple annotations are separated by "|" The order corresponds to ANNOVAR_ucsc_Transcript_ID\nThe order corresponds to ANNOVAR_ucsc_Transcript_ID */
  ANNOVAR_ucsc_Exon_Rank?: Maybe<Scalars['String']['output']>;
  /** UCSC gene IDs corresponding to transcripts.\nMultiple IDs are separated by "|" The order corresponds to ANNOVAR_ucsc_Transcript_ID\nThe order corresponds to ANNOVAR_ucsc_Transcript_ID */
  ANNOVAR_ucsc_Gene_ID?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSc.\nMultiple annotations are separated by "|" The order corresponds to ANNOVAR_ucsc_Transcript_ID\nThe order corresponds to ANNOVAR_ucsc_Transcript_ID */
  ANNOVAR_ucsc_HGVSc?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSp.\nMultiple annotations are separated by "|" The order corresponds to ANNOVAR_ucsc_Transcript_ID\nThe order corresponds to ANNOVAR_ucsc_Transcript_ID */
  ANNOVAR_ucsc_HGVSp?: Maybe<Scalars['String']['output']>;
  /** UCSC transcript IDs corresponding to consequences.\nMultiple IDs are separated by "|" */
  ANNOVAR_ucsc_Transcript_ID?: Maybe<Scalars['String']['output']>;
  /** ANNOVAR consequence summary with UCSC as gene model.\nFormat GeneID(total number of transcripts):consequence#1(number of transcripts affected) consequence#2(number of transcripts affected)... Multiple genes are separated by "|"\nGeneID(total number of transcripts):consequence#1(number of transcripts affected)\nconsequence#2(number of transcripts affected)... Multiple genes are separated by "|" */
  ANNOVAR_ucsc_summary?: Maybe<Scalars['String']['output']>;
  /** APPRIS annotation for the transcripts matching Ensembl_transcriptid\nMultiple entries separated by ";". Potential values principal1, principal2, principal3, principal4, principal5, alternative1, alternative2. See https://useast.ensembl.org/info/genome/genebuild/transcript_quality_tags.html\nprincipal1, principal2,\nprincipal3, principal4, principal5, alternative1, alternative2.\nSee https://useast.ensembl.org/info/genome/genebuild/transcript_quality_tags.html */
  APPRIS?: Maybe<Scalars['String']['output']>;
  /** Confidence level of Aloft_pred;\nvalues can be "High Confidence" (p < 0.05) or "Low Confidence" (p > 0.05) multiple values separated by ";", corresponding to Ensembl_proteinid.\nmultiple values separated by ";", corresponding to Ensembl_proteinid. */
  Aloft_Confidence?: Maybe<Scalars['String']['output']>;
  /** the fraction of the transcripts of the gene affected\ni.e. No. of transcripts affected by the SNP/Total no. of protein_coding transcripts for the gene multiple values separated by ";", corresponding to Ensembl_proteinid.\nmultiple values separated by ";", corresponding to Ensembl_proteinid. */
  Aloft_Fraction_transcripts_affected?: Maybe<Scalars['String']['output']>;
  /** final classification predicted by ALoFT;\nvalues can be Tolerant, Recessive or Dominant multiple values separated by ";", corresponding to Ensembl_proteinid.\nmultiple values separated by ";", corresponding to Ensembl_proteinid. */
  Aloft_pred?: Maybe<Scalars['String']['output']>;
  /**  Probability of the SNP being classified as dominant disease-causing by ALoFT\nmultiple values separated by ";", corresponding to Ensembl_proteinid. */
  Aloft_prob_Dominant?: Maybe<Scalars['String']['output']>;
  /** Probability of the SNP being classified as recessive disease-causing by ALoFT\nmultiple values separated by ";", corresponding to Ensembl_proteinid. */
  Aloft_prob_Recessive?: Maybe<Scalars['String']['output']>;
  /** Probability of the SNP being classified as benign by ALoFT\nmultiple values separated by ";", corresponding to Ensembl_proteinid. */
  Aloft_prob_Tolerant?: Maybe<Scalars['String']['output']>;
  /** CADD phred-like score, ranges 1-99, the larger the number the more likely\ndamaging; score >10 means the variant in the top 10% (0.1) among the total 8.6 billion possible SNVs, >20 means in the top 1%, >30 means in the top 0.1%, etc. CADD suggests a cutoff between 10 and 20 (e.g. 15)\n8.6 billion possible SNVs, >20 means in the top 1%, >30 means in the top 0.1%, etc.\nCADD suggests a cutoff between 10 and 20 (e.g. 15) */
  CADD_phred?: Maybe<Scalars['Float']['output']>;
  /** CADD raw score, the larger the number the more likely damaging */
  CADD_raw?: Maybe<Scalars['Float']['output']>;
  /** the rank of the CADD_raw score among all CADD_raw scores in genome */
  CADD_raw_rankscore?: Maybe<Scalars['Float']['output']>;
  /** number of samples having this SNV in the COSMIC database */
  COSMIC_CNT?: Maybe<Scalars['Int']['output']>;
  /** ID of the SNV at the COSMIC (Catalogue Of Somatic Mutations In Cancer) database */
  COSMIC_ID?: Maybe<Scalars['String']['output']>;
  /** Prediction of DEOGEN2 score based on the authors' recommendation, "T(olerated)" or\n"D(amaging)". The score cutoff between "D" and "T" is 0.5. */
  DEOGEN2_pred?: Maybe<Scalars['String']['output']>;
  /** DEOGEN2 scores were ranked among all DEOGEN2 scores in dbNSFP. The rankscore is\nthe ratio of the rank of the score over the total number of DEOGEN2 scores in dbNSFP. */
  DEOGEN2_rankscore?: Maybe<Scalars['String']['output']>;
  /** A deleteriousness prediction score "which incorporates heterogeneous information about\nthe molecular effects of the variants, the domains involved, the relevance of the gene and the interactions in which it participates". It ranges from 0 to 1. The larger the score, the more likely the variant is deleterious. The authors suggest a threshold of 0.5 for separating damaging vs tolerant variants.\ninteractions in which it participates". It ranges from 0 to 1. The larger the score, the more\nlikely the variant is deleterious. The authors suggest a threshold of 0.5 for separating damaging\nvs tolerant variants. */
  DEOGEN2_score?: Maybe<Scalars['String']['output']>;
  /** number of cell lines supporting a DNase I hypersensitive site */
  ENCODE_Dnase_cells?: Maybe<Scalars['Int']['output']>;
  /** the higher the score the stronger the evidence of a DNase I\nhypersensitive site */
  ENCODE_Dnase_score?: Maybe<Scalars['Int']['output']>;
  /** name of the transcription factors (separated by ;) if the site is within a TFBS */
  ENCODE_TFBS?: Maybe<Scalars['String']['output']>;
  /** the cell lines (separated by ;) the TFBS was detected */
  ENCODE_TFBS_cells?: Maybe<Scalars['String']['output']>;
  /** the higher the score the stronger the evidence of the TFBS */
  ENCODE_TFBS_score?: Maybe<Scalars['String']['output']>;
  /** whether annotated by ENCODE based on funseq-0.1 */
  ENCODE_annotated?: Maybe<Scalars['String']['output']>;
  /** Alternative allele counts in the African American samples of the\nNHLBI GO Exome Sequencing Project (ESP6500 data set). */
  ESP6500_AA_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the African American samples of the\nNHLBI GO Exome Sequencing Project (ESP6500 data set). */
  ESP6500_AA_AF?: Maybe<Scalars['Float']['output']>;
  /** Alternative allele counts in the combined African/European American samples of the\nNHLBI GO Exome Sequencing Project (ESP6500 data set). */
  ESP6500_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the combined African/European American samples of the\nNHLBI GO Exome Sequencing Project (ESP6500 data set). */
  ESP6500_AF?: Maybe<Scalars['Float']['output']>;
  /** Alternative allele counts in the European American samples of the\nNHLBI GO Exome Sequencing Project (ESP6500 data set). */
  ESP6500_EA_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the European American samples of the\nNHLBI GO Exome Sequencing Project (ESP6500 data set). */
  ESP6500_EA_AF?: Maybe<Scalars['Float']['output']>;
  /** Ensembl ID for the regulatory feature */
  Ensembl_Regulatory_Build_ID?: Maybe<Scalars['String']['output']>;
  /** TFBS from Ensembl Regulatory Build. Multiple TFBS separated by ";" */
  Ensembl_Regulatory_Build_TFBS?: Maybe<Scalars['String']['output']>;
  /** TF binding matrix ID */
  Ensembl_Regulatory_Build_TFBS_matrix?: Maybe<Scalars['String']['output']>;
  /** genome segment prediction based on 68 cell types from\nENCODE, BLUEPRINT and Roadmap. Predicted states CTCF_Binding_Site, Enhancer, Open_chromatin, Promoter_Flanking_Region, TF_binding_site, Promoter\nCTCF_Binding_Site, Enhancer,\nOpen_chromatin, Promoter_Flanking_Region, TF_binding_site, Promoter */
  Ensembl_Regulatory_Build_feature_type?: Maybe<Scalars['String']['output']>;
  /** Ensembl gene id */
  Ensembl_geneid?: Maybe<Scalars['String']['output']>;
  Ensembl_mapped_to_0_flanking_region?: Maybe<Scalars['String']['output']>;
  Ensembl_mapped_to_10000_flanking_region?: Maybe<Scalars['String']['output']>;
  Ensembl_mapped_to_20000_flanking_region?: Maybe<Scalars['String']['output']>;
  Ensembl_mapped_to_ANNOVAR_refseq_Gene_ID?: Maybe<Scalars['String']['output']>;
  Ensembl_mapped_to_SnpEff_refseq_Gene_ID?: Maybe<Scalars['String']['output']>;
  Ensembl_mapped_to_VEP_refseq_Gene_ID?: Maybe<Scalars['String']['output']>;
  /** Ensembl protein ids\nMultiple entries separated by ";",  corresponding to Ensembl_transcriptids */
  Ensembl_proteinid?: Maybe<Scalars['String']['output']>;
  /** Ensembl transcript ids (Multiple entries separated by ";") */
  Ensembl_transcriptid?: Maybe<Scalars['String']['output']>;
  /** Allele count in total ExAC samples (60,706 samples) */
  ExAC_AC?: Maybe<Scalars['Int']['output']>;
  /** Allele frequency in total ExAC samples */
  ExAC_AF?: Maybe<Scalars['Float']['output']>;
  /** Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in African & African American ExAC samples */
  ExAC_AFR_AC?: Maybe<Scalars['Int']['output']>;
  /** Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in African & African American ExAC samples */
  ExAC_AFR_AF?: Maybe<Scalars['Float']['output']>;
  /** Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in American ExAC samples */
  ExAC_AMR_AC?: Maybe<Scalars['Int']['output']>;
  /** Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in American ExAC samples */
  ExAC_AMR_AF?: Maybe<Scalars['Float']['output']>;
  /** Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in total ExAC samples */
  ExAC_Adj_AC?: Maybe<Scalars['Int']['output']>;
  /** Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in total ExAC samples */
  ExAC_Adj_AF?: Maybe<Scalars['Float']['output']>;
  /** Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in East Asian ExAC samples */
  ExAC_EAS_AC?: Maybe<Scalars['Int']['output']>;
  /** Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in East Asian ExAC samples */
  ExAC_EAS_AF?: Maybe<Scalars['String']['output']>;
  /** Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in Finnish ExAC samples */
  ExAC_FIN_AC?: Maybe<Scalars['Int']['output']>;
  /** Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in Finnish ExAC samples */
  ExAC_FIN_AF?: Maybe<Scalars['String']['output']>;
  /** Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in Non-Finnish European ExAC samples */
  ExAC_NFE_AC?: Maybe<Scalars['Int']['output']>;
  /** Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in Non-Finnish European ExAC samples */
  ExAC_NFE_AF?: Maybe<Scalars['Float']['output']>;
  /** Adjusted Alt allele counts (DP >= 10 & GQ >= 20) in South Asian ExAC samples */
  ExAC_SAS_AC?: Maybe<Scalars['Int']['output']>;
  /** Adjusted Alt allele frequency (DP >= 10 & GQ >= 20) in South Asian ExAC samples */
  ExAC_SAS_AF?: Maybe<Scalars['Float']['output']>;
  /** whether the site is within a FANTOM5 phase 1 permissive Cap Analysis of Gene Expression\n(CAGE) peak permissive set. Y (Yes) or N (No). A CAGE peak generally suggests a promoter region */
  FANTOM5_CAGE_peak_permissive?: Maybe<Scalars['String']['output']>;
  /** whether the site is within a FANTOM5 phase 1+2 robust Cap Analysis of Gene Expression\n(CAGE) peak robust set. Y (Yes) or N (No). A CAGE peak generally suggests a promoter region */
  FANTOM5_CAGE_peak_robust?: Maybe<Scalars['String']['output']>;
  /** tissue or cell the enhancer expressed differentially\n(from FANTOM5 phase 1). multiple values are separated by ; possible values neuronal_stem_cell,myoblast,osteoblast,ciliated_epithelial_cell, blood_vessel_endothelial_cell,mesothelial_cell,circulating_cell,T_cell,granulocyte,mast_cell, sensory_epithelial_cell,astrocyte,mesenchymal_cell,fat_cell,chondrocyte,melanocyte,hepatocyte, skeletal_muscle_cell,macrophage,keratinocyte,vascular_associated_smooth_muscle_cell,tendon_cell, dendritic_cell,stromal_cell,neuron,reticulocyte,corneal_epithelial_cell,monocyte,acinar_cell, natural_killer_cell,hepatic_stellate_cell,pericyte_cell,urothelial_cell,cardiac_myocyte,basophil, neutrophil,lymphocyte_of_B_lineage,endothelial_cell_of_lymphatic_vessel,epithelial_cell_of_Malassez, lens_epithelial_cell,epithelial_cell_of_prostate,epithelial_cell_of_esophagus, mammary_epithelial_cell,preadipocyte,keratocyte,trabecular_meshwork_cell,respiratory_epithelial_cell, enteric_smooth_muscle_cell,kidney_epithelial_cell,amniotic_epithelial_cell,cardiac_fibroblast, fibroblast_of_choroid_plexus,fibroblast_of_the_conjuctiva,fibroblast_of_gingiva, fibroblast_of_lymphatic_vessel,fibroblast_of_periodontium,fibroblast_of_pulmonary_artery, hair_follicle_cell,intestinal_epithelial_cell,iris_pigment_epithelial_cell,placental_epithelial_cell, retinal_pigment_epithelial_cell,bronchial_smooth_muscle_cell,smooth_muscle_cell_of_the_esophagus, smooth_muscle_cell_of_trachea,uterine_smooth_muscle_cell,skin_fibroblast,gingival_epithelial_cell, fibroblast_of_tunica_adventitia_of_artery,endothelial_cell_of_hepatic_sinusoid, smooth_muscle_cell_of_prostate,lymph_node,large_intestine,blood,throat,testis,stomach,heart,brain, eye,penis,female_gonad,uterus,vagina,adipose_tissue,esophagus,salivary_gland,skeletal_muscle_tissue, smooth_muscle_tissue,urinary_bladder,pancreas,tongue,submandibular_gland,parotid_gland,blood_vessel, placenta,thyroid_gland,lung,skin_of_body,spleen,liver,small_intestine,gallbladder,kidney,spinal_cord, umbilical_cord,meninx,prostate_gland,thymus,tonsil,olfactory_region,internal_male_genitalia\npossible values\nneuronal_stem_cell,myoblast,osteoblast,ciliated_epithelial_cell,\nblood_vessel_endothelial_cell,mesothelial_cell,circulating_cell,T_cell,granulocyte,mast_cell,\nsensory_epithelial_cell,astrocyte,mesenchymal_cell,fat_cell,chondrocyte,melanocyte,hepatocyte,\nskeletal_muscle_cell,macrophage,keratinocyte,vascular_associated_smooth_muscle_cell,tendon_cell,\ndendritic_cell,stromal_cell,neuron,reticulocyte,corneal_epithelial_cell,monocyte,acinar_cell,\nnatural_killer_cell,hepatic_stellate_cell,pericyte_cell,urothelial_cell,cardiac_myocyte,basophil,\nneutrophil,lymphocyte_of_B_lineage,endothelial_cell_of_lymphatic_vessel,epithelial_cell_of_Malassez,\nlens_epithelial_cell,epithelial_cell_of_prostate,epithelial_cell_of_esophagus,\nmammary_epithelial_cell,preadipocyte,keratocyte,trabecular_meshwork_cell,respiratory_epithelial_cell,\nenteric_smooth_muscle_cell,kidney_epithelial_cell,amniotic_epithelial_cell,cardiac_fibroblast,\nfibroblast_of_choroid_plexus,fibroblast_of_the_conjuctiva,fibroblast_of_gingiva,\nfibroblast_of_lymphatic_vessel,fibroblast_of_periodontium,fibroblast_of_pulmonary_artery,\nhair_follicle_cell,intestinal_epithelial_cell,iris_pigment_epithelial_cell,placental_epithelial_cell,\nretinal_pigment_epithelial_cell,bronchial_smooth_muscle_cell,smooth_muscle_cell_of_the_esophagus,\nsmooth_muscle_cell_of_trachea,uterine_smooth_muscle_cell,skin_fibroblast,gingival_epithelial_cell,\nfibroblast_of_tunica_adventitia_of_artery,endothelial_cell_of_hepatic_sinusoid,\nsmooth_muscle_cell_of_prostate,lymph_node,large_intestine,blood,throat,testis,stomach,heart,brain,\neye,penis,female_gonad,uterus,vagina,adipose_tissue,esophagus,salivary_gland,skeletal_muscle_tissue,\nsmooth_muscle_tissue,urinary_bladder,pancreas,tongue,submandibular_gland,parotid_gland,blood_vessel,\nplacenta,thyroid_gland,lung,skin_of_body,spleen,liver,small_intestine,gallbladder,kidney,spinal_cord,\numbilical_cord,meninx,prostate_gland,thymus,tonsil,olfactory_region,internal_male_genitalia */
  FANTOM5_enhancer_differentially_expressed_tissue_cell?: Maybe<Scalars['String']['output']>;
  /** tissue or cell the enhancer expressed (from FANTOM5 phase 1).\nmultiple values are separated by ; possible values neuronal_stem_cell,myoblast,osteoblast,ciliated_epithelial_cell, blood_vessel_endothelial_cell,mesothelial_cell,circulating_cell,T_cell,granulocyte,mast_cell, sensory_epithelial_cell,astrocyte,mesenchymal_cell,fat_cell,chondrocyte,melanocyte,hepatocyte, skeletal_muscle_cell,macrophage,keratinocyte,vascular_associated_smooth_muscle_cell,tendon_cell, dendritic_cell,stromal_cell,neuron,reticulocyte,corneal_epithelial_cell,monocyte,acinar_cell, natural_killer_cell,hepatic_stellate_cell,pericyte_cell,urothelial_cell,cardiac_myocyte,basophil, neutrophil,lymphocyte_of_B_lineage,endothelial_cell_of_lymphatic_vessel,epithelial_cell_of_Malassez, lens_epithelial_cell,epithelial_cell_of_prostate,epithelial_cell_of_esophagus, mammary_epithelial_cell,preadipocyte,keratocyte,trabecular_meshwork_cell,respiratory_epithelial_cell, enteric_smooth_muscle_cell,kidney_epithelial_cell,amniotic_epithelial_cell,cardiac_fibroblast, fibroblast_of_choroid_plexus,fibroblast_of_the_conjuctiva,fibroblast_of_gingiva, fibroblast_of_lymphatic_vessel,fibroblast_of_periodontium,fibroblast_of_pulmonary_artery, hair_follicle_cell,intestinal_epithelial_cell,iris_pigment_epithelial_cell,placental_epithelial_cell, retinal_pigment_epithelial_cell,bronchial_smooth_muscle_cell,smooth_muscle_cell_of_the_esophagus, smooth_muscle_cell_of_trachea,uterine_smooth_muscle_cell,skin_fibroblast,gingival_epithelial_cell, fibroblast_of_tunica_adventitia_of_artery,endothelial_cell_of_hepatic_sinusoid, smooth_muscle_cell_of_prostate,lymph_node,large_intestine,blood,throat,testis,stomach,heart,brain, eye,penis,female_gonad,uterus,vagina,adipose_tissue,esophagus,salivary_gland,skeletal_muscle_tissue, smooth_muscle_tissue,urinary_bladder,pancreas,tongue,submandibular_gland,parotid_gland,blood_vessel, placenta,thyroid_gland,lung,skin_of_body,spleen,liver,small_intestine,gallbladder,kidney,spinal_cord, umbilical_cord,meninx,prostate_gland,thymus,tonsil,olfactory_region,internal_male_genitalia\npossible values\nneuronal_stem_cell,myoblast,osteoblast,ciliated_epithelial_cell,\nblood_vessel_endothelial_cell,mesothelial_cell,circulating_cell,T_cell,granulocyte,mast_cell,\nsensory_epithelial_cell,astrocyte,mesenchymal_cell,fat_cell,chondrocyte,melanocyte,hepatocyte,\nskeletal_muscle_cell,macrophage,keratinocyte,vascular_associated_smooth_muscle_cell,tendon_cell,\ndendritic_cell,stromal_cell,neuron,reticulocyte,corneal_epithelial_cell,monocyte,acinar_cell,\nnatural_killer_cell,hepatic_stellate_cell,pericyte_cell,urothelial_cell,cardiac_myocyte,basophil,\nneutrophil,lymphocyte_of_B_lineage,endothelial_cell_of_lymphatic_vessel,epithelial_cell_of_Malassez,\nlens_epithelial_cell,epithelial_cell_of_prostate,epithelial_cell_of_esophagus,\nmammary_epithelial_cell,preadipocyte,keratocyte,trabecular_meshwork_cell,respiratory_epithelial_cell,\nenteric_smooth_muscle_cell,kidney_epithelial_cell,amniotic_epithelial_cell,cardiac_fibroblast,\nfibroblast_of_choroid_plexus,fibroblast_of_the_conjuctiva,fibroblast_of_gingiva,\nfibroblast_of_lymphatic_vessel,fibroblast_of_periodontium,fibroblast_of_pulmonary_artery,\nhair_follicle_cell,intestinal_epithelial_cell,iris_pigment_epithelial_cell,placental_epithelial_cell,\nretinal_pigment_epithelial_cell,bronchial_smooth_muscle_cell,smooth_muscle_cell_of_the_esophagus,\nsmooth_muscle_cell_of_trachea,uterine_smooth_muscle_cell,skin_fibroblast,gingival_epithelial_cell,\nfibroblast_of_tunica_adventitia_of_artery,endothelial_cell_of_hepatic_sinusoid,\nsmooth_muscle_cell_of_prostate,lymph_node,large_intestine,blood,throat,testis,stomach,heart,brain,\neye,penis,female_gonad,uterus,vagina,adipose_tissue,esophagus,salivary_gland,skeletal_muscle_tissue,\nsmooth_muscle_tissue,urinary_bladder,pancreas,tongue,submandibular_gland,parotid_gland,blood_vessel,\nplacenta,thyroid_gland,lung,skin_of_body,spleen,liver,small_intestine,gallbladder,kidney,spinal_cord,\numbilical_cord,meninx,prostate_gland,thymus,tonsil,olfactory_region,internal_male_genitalia */
  FANTOM5_enhancer_expressed_tissue_cell?: Maybe<Scalars['String']['output']>;
  /** whether the site is within a FANTOM5 phase 1+2 predicted permissive enhancer\nY (Yes) or N (No) */
  FANTOM5_enhancer_permissive?: Maybe<Scalars['String']['output']>;
  /** whether the site is within a FANTOM5 phase 1 predicted robust enhancer\nY (Yes) or N (No) */
  FANTOM5_enhancer_robust?: Maybe<Scalars['String']['output']>;
  /** if the site is within a FANTOM5 phase 1 predicted robust enhancer,\nthis is the name of the FANTOM5 predicted target gene of the enhancer. */
  FANTOM5_enhancer_target?: Maybe<Scalars['String']['output']>;
  /** FATHMMori scores were first converted to\nFATHMMnew=1-(FATHMMori+16.13)/26.77, then ranked among all FATHMMnew scores in dbNSFP. The rankscore is the ratio of the rank of the score over the total number of FATHMMnew scores in dbNSFP. If there are multiple scores, only the most damaging (largest) rankscore is presented. The scores range from 0 to 1.\nThe rankscore is the ratio of the rank of the score over the total number of FATHMMnew\nscores in dbNSFP. If there are multiple scores, only the most damaging (largest)\nrankscore is presented. The scores range from 0 to 1. */
  FATHMM_converted_rankscore?: Maybe<Scalars['String']['output']>;
  /** If a FATHMMori score is <=-1.5 (or rankscore >=0.81332) the corresponding nsSNV\nis predicted as "D(AMAGING)"; otherwise it is predicted as "T(OLERATED)". Multiple predictions separated by ";", corresponding to Ensembl_proteinid.\nMultiple predictions separated by ";", corresponding to Ensembl_proteinid. */
  FATHMM_pred?: Maybe<Scalars['String']['output']>;
  /** FATHMM default score (weighted for human inherited-disease mutations with\nDisease Ontology) (FATHMMori). Scores range from -16.13 to 10.64. The smaller the score the more likely the SNP has damaging effect. Multiple scores separated by ";", corresponding to Ensembl_proteinid.\nthe more likely the SNP has damaging effect.\nMultiple scores separated by ";", corresponding to Ensembl_proteinid. */
  FATHMM_score?: Maybe<Scalars['String']['output']>;
  /** Whether the transcript belongs to GENCODE_basic (5' and 3' complete\ntranscripts). Multiple entries separated by ";", matching Ensembl_transcriptid. See https://useast.ensembl.org/info/genome/genebuild/transcript_quality_tags.html\nSee https://useast.ensembl.org/info/genome/genebuild/transcript_quality_tags.html */
  GENCODE_basic?: Maybe<Scalars['String']['output']>;
  /** GERP++ neutral rate */
  GERP_NR?: Maybe<Scalars['Float']['output']>;
  /** GERP++ RS score, the larger the score, the more conserved the site */
  GERP_RS?: Maybe<Scalars['Float']['output']>;
  /** the rank of the GERP_RS score among all GERP_RS scores in genome */
  GERP_RS_rankscore?: Maybe<Scalars['Float']['output']>;
  /** PMID number by GRASP */
  GRASP_PMID?: Maybe<Scalars['String']['output']>;
  /** population ancestry of the samples on which the association test was based */
  GRASP_ancestry?: Maybe<Scalars['String']['output']>;
  /** p-value of the association test based on the SNP */
  GRASP_p_value?: Maybe<Scalars['String']['output']>;
  /** phenotype the SNP associated with */
  GRASP_phenotype?: Maybe<Scalars['String']['output']>;
  /** SNP platform on which the association test was based */
  GRASP_platform?: Maybe<Scalars['String']['output']>;
  /** rs number by GRASP */
  GRASP_rs?: Maybe<Scalars['Int']['output']>;
  /** gene ID of the eQTL associated with */
  GTEx_V7_gene?: Maybe<Scalars['String']['output']>;
  /** the tissue expression data in which the eQTL was detected */
  GTEx_V7_tissue?: Maybe<Scalars['String']['output']>;
  /** reported odds ratio associated with strongest risk allele */
  GWAS_catalog_OR?: Maybe<Scalars['Float']['output']>;
  /** pubmedid of the paper describing the association\nPlease note the association is determined by rs number only, may refer to a different allele */
  GWAS_catalog_pubmedid?: Maybe<Scalars['String']['output']>;
  /** rs number according to GWAS catalog\nPlease note the association is determined by rs number only, may refer to a different allele */
  GWAS_catalog_rs?: Maybe<Scalars['String']['output']>;
  /** associated trait according to GWAS catalog.\nPlease note the association is determined by rs number only, may refer to a different allele */
  GWAS_catalog_trait?: Maybe<Scalars['String']['output']>;
  /** estimated nonsynonymous-to-synonymous-rate ratio (Omega, reported by LRT) */
  LRT_Omega?: Maybe<Scalars['String']['output']>;
  /** LRTori scores were first converted as LRTnew=1-LRTori*0.5 if\nOmega<1, or LRTnew=LRTori*0.5 if Omega>=1. Then LRTnew scores were ranked among all LRTnew scores in dbNSFP. The rankscore is the ratio of the rank over the total number of the scores in dbNSFP. The scores range from 0.00162 to 0.8433.\nLRTnew scores in dbNSFP. The rankscore is the ratio of the rank over the total number\nof the scores in dbNSFP. The scores range from 0.00162 to 0.8433. */
  LRT_converted_rankscore?: Maybe<Scalars['String']['output']>;
  /** LRT prediction, D(eleterious), N(eutral) or U(nknown), which is not solely\ndetermined by the score. */
  LRT_pred?: Maybe<Scalars['String']['output']>;
  /** The original LRT two-sided p-value (LRTori), ranges from 0 to 1. */
  LRT_score?: Maybe<Scalars['String']['output']>;
  /** MPC scores were ranked among all MPC scores in dbNSFP. The rankscore is\nthe ratio of the rank of the score over the total number of MPC scores in dbNSFP. */
  MPC_rankscore?: Maybe<Scalars['String']['output']>;
  /** A deleteriousness prediction score for missense variants based on regional missense\nconstraint. The range of MPC score is 0 to 5. The larger the score, the more likely the variant is pathogenic. Details see doi http://dx.doi.org/10.1101/148353. Multiple entries are separated by ";", corresponding to Ensembl_transcriptid.\npathogenic. Details see doi\nhttp://dx.doi.org/10.1101/148353.\nMultiple entries are separated by ";", corresponding to Ensembl_transcriptid. */
  MPC_score?: Maybe<Scalars['String']['output']>;
  /** MVP scores were ranked among all MVP scores in dbNSFP. The rankscore is\nthe ratio of the rank of the score over the total number of MVP scores in dbNSFP. */
  MVP_rankscore?: Maybe<Scalars['String']['output']>;
  /** A pathogenicity prediction score for missense variants using deep learning approach.\nThe range of MVP score is from 0 to 1. The larger the score, the more likely the variant is pathogenic. The authors suggest thresholds of 0.7 and 0.75 for separating damaging vs tolerant variants in constrained genes (ExAC pLI >=0.5) and non-constrained genes (ExAC pLI<0.5), respectively. Details see doi http://dx.doi.org/10.1101/259390 Multiple entries are separated by ";", corresponding to Ensembl_transcriptid.\npathogenic. The authors suggest thresholds of 0.7 and 0.75 for separating damaging vs tolerant\nvariants in constrained genes (ExAC pLI >=0.5) and non-constrained genes (ExAC pLI<0.5), respectively.\nDetails see doi\nhttp://dx.doi.org/10.1101/259390\nMultiple entries are separated by ";", corresponding to Ensembl_transcriptid. */
  MVP_score?: Maybe<Scalars['String']['output']>;
  /** Prediction of M-CAP score based on the authors' recommendation, "T(olerated)" or\n"D(amaging)". The score cutoff between "D" and "T" is 0.025. */
  M_CAP_pred?: Maybe<Scalars['String']['output']>;
  /** M-CAP scores were ranked among all M-CAP scores in dbNSFP. The rankscore is\nthe ratio of the rank of the score over the total number of M-CAP scores in dbNSFP. */
  M_CAP_rankscore?: Maybe<Scalars['String']['output']>;
  /** M-CAP score (details in DOI\n10.1038/ng.3703). Scores range from 0 to 1. The larger the score the more likely the SNP has damaging effect.\nthe score the more likely the SNP has damaging effect. */
  M_CAP_score?: Maybe<Scalars['String']['output']>;
  /** Prediction of our MetaLR based ensemble prediction score,"T(olerated)" or\n"D(amaging)". The score cutoff between "D" and "T" is 0.5. The rankscore cutoff between "D" and "T" is 0.81101.\n"D" and "T" is 0.81101. */
  MetaLR_pred?: Maybe<Scalars['String']['output']>;
  /** MetaLR scores were ranked among all MetaLR scores in dbNSFP. The rankscore\nis the ratio of the rank of the score over the total number of MetaLR scores in dbNSFP. The scores range from 0 to 1.\nThe scores range from 0 to 1. */
  MetaLR_rankscore?: Maybe<Scalars['String']['output']>;
  /** Our logistic regression (LR) based ensemble prediction score, which\nincorporated 10 scores (SIFT, PolyPhen-2 HDIV, PolyPhen-2 HVAR, GERP++, MutationTaster, Mutation Assessor, FATHMM, LRT, SiPhy, PhyloP) and the maximum frequency observed in the 1000 genomes populations. Larger value means the SNV is more likely to be damaging. Scores range from 0 to 1.\nMutation Assessor, FATHMM, LRT, SiPhy, PhyloP) and the maximum frequency observed in\nthe 1000 genomes populations. Larger value means the SNV is more likely to be damaging.\nScores range from 0 to 1. */
  MetaLR_score?: Maybe<Scalars['String']['output']>;
  /** Prediction of our SVM based ensemble prediction score,"T(olerated)" or\n"D(amaging)". The score cutoff between "D" and "T" is 0. The rankscore cutoff between "D" and "T" is 0.82257.\n"D" and "T" is 0.82257. */
  MetaSVM_pred?: Maybe<Scalars['String']['output']>;
  /** MetaSVM scores were ranked among all MetaSVM scores in dbNSFP.\nThe rankscore is the ratio of the rank of the score over the total number of MetaSVM scores in dbNSFP. The scores range from 0 to 1.\nscores in dbNSFP. The scores range from 0 to 1. */
  MetaSVM_rankscore?: Maybe<Scalars['String']['output']>;
  /** Our support vector machine (SVM) based ensemble prediction score, which\nincorporated 10 scores (SIFT, PolyPhen-2 HDIV, PolyPhen-2 HVAR, GERP++, MutationTaster, Mutation Assessor, FATHMM, LRT, SiPhy, PhyloP) and the maximum frequency observed in the 1000 genomes populations. Larger value means the SNV is more likely to be damaging. Scores range from -2 to 3 in dbNSFP.\nMutation Assessor, FATHMM, LRT, SiPhy, PhyloP) and the maximum frequency observed in\nthe 1000 genomes populations. Larger value means the SNV is more likely to be damaging.\nScores range from -2 to 3 in dbNSFP. */
  MetaSVM_score?: Maybe<Scalars['String']['output']>;
  /** whether break a known motif (in-house script) */
  Motif_breaking?: Maybe<Scalars['String']['output']>;
  /** Amino acid change used for MutPred_score calculation. */
  MutPred_AAchange?: Maybe<Scalars['String']['output']>;
  /** Top 5 features (molecular mechanisms of disease) as predicted by MutPred with\np values. MutPred_score > 0.5 and p < 0.05 are referred to as actionable hypotheses. MutPred_score > 0.75 and p < 0.05 are referred to as confident hypotheses. MutPred_score > 0.75 and p < 0.01 are referred to as very confident hypotheses.\nMutPred_score > 0.75 and p < 0.05 are referred to as confident hypotheses.\nMutPred_score > 0.75 and p < 0.01 are referred to as very confident hypotheses. */
  MutPred_Top5features?: Maybe<Scalars['String']['output']>;
  /** UniProt accession or Ensembl transcript ID used for MutPred_score calculation. */
  MutPred_protID?: Maybe<Scalars['String']['output']>;
  /** MutPred scores were ranked among all MutPred scores in dbNSFP. The rankscore is\nthe ratio of the rank of the score over the total number of MutPred scores in dbNSFP. */
  MutPred_rankscore?: Maybe<Scalars['String']['output']>;
  /** General MutPred score. Scores range from 0 to 1. The larger the score the more\nlikely the SNP has damaging effect. */
  MutPred_score?: Maybe<Scalars['String']['output']>;
  /** MutationAssessor's functional impact of a variant -\npredicted functional, i.e. high ("H") or medium ("M"), or predicted non-functional, i.e. low ("L") or neutral ("N"). The MAori score cutoffs between "H" and "M", "M" and "L", and "L" and "N", are 3.5, 1.935 and 0.8, respectively. The rankscore cutoffs between "H" and "M", "M" and "L", and "L" and "N", are 0.9307, 0.52043 and 0.19675, respectively.\ni.e. low ("L") or neutral ("N"). The MAori score cutoffs between "H" and "M",\n"M" and "L", and "L" and "N", are 3.5, 1.935 and 0.8, respectively. The rankscore cutoffs\nbetween "H" and "M", "M" and "L", and "L" and "N", are 0.9307, 0.52043 and 0.19675,\nrespectively. */
  MutationAssessor_pred?: Maybe<Scalars['String']['output']>;
  MutationAssessor_rankscore?: Maybe<Scalars['String']['output']>;
  /** MutationAssessor functional impact combined score (MAori). The\nscore ranges from -5.17 to 6.49 in dbNSFP. Multiple entries are separated by ";", corresponding to Uniprot_entry.\nMultiple entries are separated by ";", corresponding to Uniprot_entry. */
  MutationAssessor_score?: Maybe<Scalars['String']['output']>;
  /** MutationTaster predicted amino acid change. */
  MutationTaster_AAE?: Maybe<Scalars['String']['output']>;
  /** The MTori scores were first converted. If the prediction\nis "A" or "D" MTnew=MTori; if the prediction is "N" or "P", MTnew=1-MTori. Then MTnew scores were ranked among all MTnew scores in dbNSFP. If there are multiple scores of a SNV, only the largest MTnew was used in ranking. The rankscore is the ratio of the rank of the score over the total number of MTnew scores in dbNSFP. The scores range from 0.08979 to 0.81001.\nscores were ranked among all MTnew scores in dbNSFP. If there are multiple scores of a\nSNV, only the largest MTnew was used in ranking. The rankscore is the ratio of the\nrank of the score over the total number of MTnew scores in dbNSFP. The scores range\nfrom 0.08979 to 0.81001. */
  MutationTaster_converted_rankscore?: Maybe<Scalars['String']['output']>;
  /** MutationTaster prediction models. */
  MutationTaster_model?: Maybe<Scalars['String']['output']>;
  /** MutationTaster prediction, "A" ("disease_causing_automatic"),\n"D" ("disease_causing"), "N" ("polymorphism") or "P" ("polymorphism_automatic"). The score cutoff between "D" and "N" is 0.5 for MTnew and 0.31733 for the rankscore.\nscore cutoff between "D" and "N" is 0.5 for MTnew and 0.31733 for the rankscore. */
  MutationTaster_pred?: Maybe<Scalars['String']['output']>;
  /** MutationTaster p-value (MTori), ranges from 0 to 1.\nMultiple scores are separated by ";". Information on corresponding transcript(s) can be found by querying http://www.mutationtaster.org/ChrPos.html\nbe found by querying http://www.mutationtaster.org/ChrPos.html */
  MutationTaster_score?: Maybe<Scalars['String']['output']>;
  /** the PMID of the paper describing the regulation */
  ORegAnno_PMID?: Maybe<Scalars['String']['output']>;
  /** the type of regulatory region by ORegAnno */
  ORegAnno_type?: Maybe<Scalars['String']['output']>;
  /** PROVEANori were first converted to PROVEANnew=1-(PROVEANori+14)/28,\nthen ranked among all PROVEANnew scores in dbNSFP. The rankscore is the ratio of the rank the PROVEANnew score over the total number of PROVEANnew scores in dbNSFP. If there are multiple scores, only the most damaging (largest) rankscore is presented. The scores range from 0 to 1.\nthe rank the PROVEANnew score over the total number of PROVEANnew scores in dbNSFP.\nIf there are multiple scores, only the most damaging (largest) rankscore is presented.\nThe scores range from 0 to 1. */
  PROVEAN_converted_rankscore?: Maybe<Scalars['String']['output']>;
  /** If PROVEANori <= -2.5 (rankscore>=0.54382) the corresponding nsSNV is\npredicted as "D(amaging)"; otherwise it is predicted as "N(eutral)". Multiple predictions separated by ";", corresponding to Ensembl_proteinid.\nMultiple predictions separated by ";", corresponding to Ensembl_proteinid. */
  PROVEAN_pred?: Maybe<Scalars['String']['output']>;
  /** PROVEAN score (PROVEANori). Scores range from -14 to 14. The smaller the score\nthe more likely the SNP has damaging effect. Multiple scores separated by ";", corresponding to Ensembl_proteinid.\nMultiple scores separated by ";", corresponding to Ensembl_proteinid. */
  PROVEAN_score?: Maybe<Scalars['String']['output']>;
  /** Prediction of PrimateAI score based on the authors' recommendation, "T(olerated)" or\n"D(amaging)". The score cutoff between "D" and "T" is 0.803. */
  PrimateAI_pred?: Maybe<Scalars['String']['output']>;
  /** PrimateAI scores were ranked among all PrimateAI scores in dbNSFP. The rankscore is\nthe ratio of the rank of the score over the total number of PrimateAI scores in dbNSFP. */
  PrimateAI_rankscore?: Maybe<Scalars['String']['output']>;
  /** A pathogenicity prediction score for missense variants based on common variants of\nnon-human primate species using a deep neural network. The range of PrimateAI score is 0 to 1. The larger the score, the more likely the variant is pathogenic. The authors suggest a threshold of 0.803 for separating damaging vs tolerant variants. Details see https://doi.org/10.1038/s41588-018-0167-z\nThe larger the score, the more likely the variant is pathogenic. The authors suggest a threshold\nof 0.803 for separating damaging vs tolerant variants.\nDetails see https://doi.org/10.1038/s41588-018-0167-z */
  PrimateAI_score?: Maybe<Scalars['String']['output']>;
  /** motif the SNP resides (from RegulomeDB) */
  RegulomeDB_motif?: Maybe<Scalars['String']['output']>;
  /** categorical score from RegulomeDB. The smaller, the more likely the SNP\naffects binding */
  RegulomeDB_score?: Maybe<Scalars['String']['output']>;
  /** Number of observed component scores (except the maximum frequency in\nthe 1000 genomes populations) for MetaSVM and MetaLR. Ranges from 1 to 10. As MetaSVM and MetaLR scores are calculated based on imputed data, the less missing component scores, the higher the reliability of the scores and predictions.\nand MetaLR scores are calculated based on imputed data, the less missing component\nscores, the higher the reliability of the scores and predictions. */
  Reliability_index?: Maybe<Scalars['String']['output']>;
  /** SIFT4G scores were first converted to SIFT4Gnew=1-SIFT4G,\nthen ranked among all SIFT4Gnew scores in dbNSFP. The rankscore is the ratio of the rank the SIFT4Gnew score over the total number of SIFT4Gnew scores in dbNSFP. If there are multiple scores, only the most damaging (largest) rankscore is presented.\nthe rank the SIFT4Gnew score over the total number of SIFT4Gnew scores in dbNSFP.\nIf there are multiple scores, only the most damaging (largest) rankscore is presented. */
  SIFT4G_converted_rankscore?: Maybe<Scalars['String']['output']>;
  /** If SIFT4G is < 0.05 the corresponding nsSNV is\npredicted as "D(amaging)"; otherwise it is predicted as "T(olerated)". Multiple scores separated by ",", corresponding to Ensembl_transcriptid\nMultiple scores separated by ",", corresponding to Ensembl_transcriptid */
  SIFT4G_pred?: Maybe<Scalars['String']['output']>;
  /** SIFT 4G score (SIFT4G). Scores range from 0 to 1. The smaller the score the\nmore likely the SNP has damaging effect. Multiple scores separated by ",", corresponding to Ensembl_transcriptid\nMultiple scores separated by ",", corresponding to Ensembl_transcriptid */
  SIFT4G_score?: Maybe<Scalars['String']['output']>;
  /** SIFTori scores were first converted to SIFTnew=1-SIFTori,\nthen ranked among all SIFTnew scores in dbNSFP. The rankscore is the ratio of the rank the SIFTnew score over the total number of SIFTnew scores in dbNSFP. If there are multiple scores, only the most damaging (largest) rankscore is presented. The rankscores range from 0.00964 to 0.91255.\nthe rank the SIFTnew score over the total number of SIFTnew scores in dbNSFP.\nIf there are multiple scores, only the most damaging (largest) rankscore is presented.\nThe rankscores range from 0.00964 to 0.91255. */
  SIFT_converted_rankscore?: Maybe<Scalars['String']['output']>;
  /** If SIFTori is smaller than 0.05 (rankscore>0.39575) the corresponding nsSNV is\npredicted as "D(amaging)"; otherwise it is predicted as "T(olerated)". Multiple predictions separated by ";"\nMultiple predictions separated by ";" */
  SIFT_pred?: Maybe<Scalars['String']['output']>;
  /** SIFT score (SIFTori). Scores range from 0 to 1. The smaller the score the\nmore likely the SNP has damaging effect. Multiple scores separated by ";", corresponding to Ensembl_proteinid.\nMultiple scores separated by ";", corresponding to Ensembl_proteinid. */
  SIFT_score?: Maybe<Scalars['String']['output']>;
  /** CDS position and length as to a transcript.\nFormat CDS position/CDS length Multiple annotations are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nCDS position/CDS length\nMultiple annotations are separated by "|"\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_CDS_position_CDS_len?: Maybe<Scalars['String']['output']>;
  /** distance to feature.\nMultiple annotations are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_Distance_to_feature?: Maybe<Scalars['String']['output']>;
  /** SnpEff consequence with Ensembl as gene model.\nMultiple consequences are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_Effect?: Maybe<Scalars['String']['output']>;
  /** consequence impacts predicted by SnpEff.\nMultiple impacts are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_Effect_impact?: Maybe<Scalars['String']['output']>;
  /** exon (intron) rank and total number as to a transcript.\nFormat exon or intron rank / total exon or intron number Multiple annotations are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nexon or intron rank / total exon or intron number\nMultiple annotations are separated by "|"\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_Exon_or_intron_rank_total?: Maybe<Scalars['String']['output']>;
  /** The complete GO biological process annotations queried through PANTHER API for IDs corresponding to SnpEff_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  SnpEff_ensembl_GO_biological_process_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO cellular component annotations queried through PANTHER API for IDs corresponding to SnpEff_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  SnpEff_ensembl_GO_cellular_component_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO molecular function annotations queried through PANTHER API for IDs corresponding to SnpEff_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  SnpEff_ensembl_GO_molecular_function_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** Ensembl gene IDs corresponding to transcripts.\nMultiple IDs are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_Gene_ID?: Maybe<Scalars['String']['output']>;
  /** Ensembl gene names corresponding to transcripts.\nMultiple gene names are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_Gene_name?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSc.\nMultiple annotations are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_HGVSc?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSp.\nMultiple annotations are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_HGVSp?: Maybe<Scalars['String']['output']>;
  /** LOF or NMD by SnpEff. */
  SnpEff_ensembl_LOF_NMD?: Maybe<Scalars['String']['output']>;
  /** gene ID corresponding to SnpEff_ensembl_LOF/NMD. */
  SnpEff_ensembl_LOF_NMD_gene_ID?: Maybe<Scalars['String']['output']>;
  /** gene name corresponding to SnpEff_ensembl_LOF/NMD. */
  SnpEff_ensembl_LOF_NMD_gene_name?: Maybe<Scalars['String']['output']>;
  /** number of transcripts affected\ncorresponding to SnpEff_ensembl_LOF/NMD. */
  SnpEff_ensembl_LOF_NMD_num_transcripts_affected?: Maybe<Scalars['String']['output']>;
  /** percentage of transcripts affected\ncorresponding to SnpEff_ensembl_LOF/NMD. */
  SnpEff_ensembl_LOF_NMD_percent_transcripts_affected?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Biological Process annotations queried through PANTHER API for IDs corresponding to SnpEff_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  SnpEff_ensembl_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Cellular Component annotations queried through PANTHER API for IDs corresponding to SnpEff_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  SnpEff_ensembl_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Molecular Function annotations queried through PANTHER API for IDs corresponding to SnpEff_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  SnpEff_ensembl_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER pathway annotations queried through PANTHER API for IDs corresponding to SnpEff_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Pathways from all genes is shown here. */
  SnpEff_ensembl_PANTHER_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Protein Class annotations queried through PANTHER API for IDs corresponding to SnpEff_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Protein Class terms from all genes is shown here. */
  SnpEff_ensembl_PANTHER_protein_class_list_id?: Maybe<Scalars['String']['output']>;
  /** protein position and length as to a transcript.\nFormat protein position/protein length Multiple annotations are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nprotein position/protein length\nMultiple annotations are separated by "|"\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_Protein_position_Protein_len?: Maybe<Scalars['String']['output']>;
  /** The Reactome Pathway annotations queried through PANTHER API for IDs corresponding to SnpEff_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of Reactome Pathways from all genes is shown here. */
  SnpEff_ensembl_REACTOME_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** SnpEff consequence features.\nMultiple features are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_Sequence_feature?: Maybe<Scalars['String']['output']>;
  /** sequence feature impacts predicted by SnpEff.\nMultiple impacts are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_Sequence_feature_impact?: Maybe<Scalars['String']['output']>;
  /** ID of the TF */
  SnpEff_ensembl_TF_ID?: Maybe<Scalars['String']['output']>;
  /** effect of TF binding by SnpEff */
  SnpEff_ensembl_TF_binding_effect?: Maybe<Scalars['String']['output']>;
  /** name of the TF */
  SnpEff_ensembl_TF_name?: Maybe<Scalars['String']['output']>;
  /** Ensembl transcript IDs corresponding to consequences.\nMultiple IDs are separated by "|" */
  SnpEff_ensembl_Transcript_ID?: Maybe<Scalars['String']['output']>;
  /** biotype of transcript.\nMultiple biotypes are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_Transcript_biotype?: Maybe<Scalars['String']['output']>;
  /** SnpEff warnings.\nMultiple annotations are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_Warnings?: Maybe<Scalars['String']['output']>;
  /** cDNA position and length as to a transcript.\nFormat cDNA position/cDNA length Multiple annotations are separated by "|" The order corresponds to SnpEff_ensembl_Transcript_ID\ncDNA position/cDNA length\nMultiple annotations are separated by "|"\nThe order corresponds to SnpEff_ensembl_Transcript_ID */
  SnpEff_ensembl_cDNA_position_cDNA_len?: Maybe<Scalars['String']['output']>;
  /** SnpEff consequence summary with Ensembl as gene model.\nFormat GeneID(total number of transcripts):consequence#1(number of transcripts affected) consequence#2(number of transcripts affected)... Multiple genes are separated by "|"\nGeneID(total number of transcripts):consequence#1(number of transcripts affected)\nconsequence#2(number of transcripts affected)... Multiple genes are separated by "|" */
  SnpEff_ensembl_summary?: Maybe<Scalars['String']['output']>;
  /** CDS position and length as to a transcript.\nFormat CDS position/CDS length Multiple annotations are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nCDS position/CDS length\nMultiple annotations are separated by "|"\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_CDS_position_CDS_len?: Maybe<Scalars['String']['output']>;
  /** distance to feature.\nMultiple annotations are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_Distance_to_feature?: Maybe<Scalars['String']['output']>;
  /** SnpEff consequence with RefSeq as gene model.\nMultiple consequences are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_Effect?: Maybe<Scalars['String']['output']>;
  /** consequence impacts predicted by SnpEff.\nMultiple impacts are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_Effect_impact?: Maybe<Scalars['String']['output']>;
  /** exon (intron) rank and total number as to a transcript.\nFormat exon or intron rank / total exon or intron number Multiple annotations are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nexon or intron rank / total exon or intron number\nMultiple annotations are separated by "|"\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_Exon_or_intron_rank_total?: Maybe<Scalars['String']['output']>;
  /** The complete GO biological process annotations queried through PANTHER API for IDs corresponding to  SnpEff_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  SnpEff_refseq_GO_biological_process_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO cellular component annotations queried through PANTHER API for IDs corresponding to SnpEff_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  SnpEff_refseq_GO_cellular_component_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO cellular component annotations queried through PANTHER API for IDs corresponding to SnpEff_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  SnpEff_refseq_GO_molecular_function_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** RefSeq gene IDs corresponding to transcripts.\nMultiple IDs are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_Gene_ID?: Maybe<Scalars['String']['output']>;
  /** RefSeq gene names corresponding to transcripts.\nMultiple gene names are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_Gene_name?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSc.\nMultiple annotations are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_HGVSc?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSp.\nMultiple annotations are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_HGVSp?: Maybe<Scalars['String']['output']>;
  /** LOF or NMD by SnpEff. */
  SnpEff_refseq_LOF_NMD?: Maybe<Scalars['String']['output']>;
  /** gene ID corresponding to SnpEff_refseq_LOF/NMD. */
  SnpEff_refseq_LOF_NMD_gene_ID?: Maybe<Scalars['String']['output']>;
  /** gene name corresponding to SnpEff_refseq_LOF/NMD. */
  SnpEff_refseq_LOF_NMD_gene_name?: Maybe<Scalars['String']['output']>;
  /** number of transcripts affected\ncorresponding to SnpEff_refseq_LOF/NMD. */
  SnpEff_refseq_LOF_NMD_num_transcripts_affected?: Maybe<Scalars['String']['output']>;
  /** percentage of transcripts affected\ncorresponding to SnpEff_refseq_LOF/NMD. */
  SnpEff_refseq_LOF_NMD_percent_transcripts_affected?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Biological Process annotations queried through PANTHER API for IDs corresponding to SnpEff_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here.. */
  SnpEff_refseq_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Cellular Component annotations queried through PANTHER API for IDs corresponding to SnpEff_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  SnpEff_refseq_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Molecular Function annotations queried through PANTHER API for IDs corresponding to SnpEff_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  SnpEff_refseq_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER pathway annotations queried through PANTHER API for IDs corresponding to SnpEff_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Pathways from all genes is shown here. */
  SnpEff_refseq_PANTHER_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Protein Class annotations queried through PANTHER API for IDs corresponding to SnpEff_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Protein Class terms from all genes is shown here. */
  SnpEff_refseq_PANTHER_protein_class_list_id?: Maybe<Scalars['String']['output']>;
  /** protein position and length as to a transcript.\nFormat protein position/protein length Multiple annotations are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nprotein position/protein length\nMultiple annotations are separated by "|"\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_Protein_position_Protein_len?: Maybe<Scalars['String']['output']>;
  /** The Reactome Pathway annotations queried through PANTHER API for IDs corresponding to SnpEff_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of Reactome Pathways from all genes is shown here. */
  SnpEff_refseq_REACTOME_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** SnpEff consequence features.\nMultiple features are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_Sequence_feature?: Maybe<Scalars['String']['output']>;
  /** sequence feature impacts predicted by SnpEff.\nMultiple impacts are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_Sequence_feature_impact?: Maybe<Scalars['String']['output']>;
  /** RefSeq transcript IDs corresponding to consequences.\nMultiple IDs are separated by "|" */
  SnpEff_refseq_Transcript_ID?: Maybe<Scalars['String']['output']>;
  /** biotype of transcript.\nMultiple biotypes are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_Transcript_biotype?: Maybe<Scalars['String']['output']>;
  /** SnpEff warnings.\nMultiple annotations are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_Warnings?: Maybe<Scalars['String']['output']>;
  /** cDNA position and length as to a transcript.\nFormat cDNA position/cDNA length Multiple annotations are separated by "|" The order corresponds to SnpEff_refseq_Transcript_ID\ncDNA position/cDNA length\nMultiple annotations are separated by "|"\nThe order corresponds to SnpEff_refseq_Transcript_ID */
  SnpEff_refseq_cDNA_position_cDNA_len?: Maybe<Scalars['String']['output']>;
  /** SnpEff consequence summary with RefSeq as gene model.\nFormat GeneID(total number of transcripts):consequence#1(number of transcripts affected) consequence#2(number of transcripts affected)... Multiple genes are separated by "|"\nGeneID(total number of transcripts):consequence#1(number of transcripts affected)\nconsequence#2(number of transcripts affected)... Multiple genes are separated by "|" */
  SnpEff_refseq_summary?: Maybe<Scalars['String']['output']>;
  /** Transcript Support Level.\nMultiple entries separated by ";", matching Ensembl_transcriptid. Potential values 1 to 5, NA. See https://useast.ensembl.org/info/genome/genebuild/transcript_quality_tags.html\nPotential values\n1 to 5, NA.\nSee https://useast.ensembl.org/info/genome/genebuild/transcript_quality_tags.html */
  TSL?: Maybe<Scalars['String']['output']>;
  /** Alternative allele count in called genotypes in UK10K TWINSUK cohort. */
  TWINSUK_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in called genotypes in UK10K TWINSUK cohort. */
  TWINSUK_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in called genotypes in UK10K TWINSUK cohort. */
  TWINSUK_AN?: Maybe<Scalars['Int']['output']>;
  /** context++ score is a measure of favorableness of the\nsite for the miRNA family. The higer the percentile, the more favorable (from TargetScan) */
  TargetScan_context_score_percentile?: Maybe<Scalars['String']['output']>;
  /** Alternative allele count in called genotypes in UK10K cohorts. */
  UK10K_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in called genotypes in UK10K cohorts. */
  UK10K_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in called genotypes in UK10K cohorts. */
  UK10K_AN?: Maybe<Scalars['Int']['output']>;
  /** the gene-miRNA pair, if the site is located within a predicted (conserved)\ntarget of conserved miRNA families(from TargetScan) */
  UTR3_miRNA_target?: Maybe<Scalars['String']['output']>;
  /** Uniprot accession number matching the Ensembl_proteinid\nMultiple entries separated by ";". */
  Uniprot_acc?: Maybe<Scalars['String']['output']>;
  /** Uniprot entry ID matching the Ensembl_proteinid\nMultiple entries separated by ";". */
  Uniprot_entry?: Maybe<Scalars['String']['output']>;
  Uniprot_mapped_to_0_flanking_region?: Maybe<Scalars['String']['output']>;
  Uniprot_mapped_to_10000_flanking_region?: Maybe<Scalars['String']['output']>;
  Uniprot_mapped_to_20000_flanking_region?: Maybe<Scalars['String']['output']>;
  Uniprot_mapped_to_ANNOVAR_ensembl_Gene_ID?: Maybe<Scalars['String']['output']>;
  Uniprot_mapped_to_ANNOVAR_refseq_Gene_ID?: Maybe<Scalars['String']['output']>;
  Uniprot_mapped_to_SnpEff_ensembl_Gene_ID?: Maybe<Scalars['String']['output']>;
  Uniprot_mapped_to_SnpEff_refseq_Gene_ID?: Maybe<Scalars['String']['output']>;
  Uniprot_mapped_to_VEP_ensembl_Gene_ID?: Maybe<Scalars['String']['output']>;
  Uniprot_mapped_to_VEP_refseq_Gene_ID?: Maybe<Scalars['String']['output']>;
  /** canonical transcript predicted by Ensembl VEP.\nMultiple entries separated by ";", matching Ensembl_transcriptid. See https://useast.ensembl.org/Help/Glossary?id=521\nSee https://useast.ensembl.org/Help/Glossary?id=521 */
  VEP_canonical?: Maybe<Scalars['String']['output']>;
  /** amino acid change as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID "*" represents a stop codon\nThe order corresponds to VEP_ensembl_Transcript_ID\n"*" represents a stop codon */
  VEP_ensembl_Amino_Acid_Change?: Maybe<Scalars['String']['output']>;
  /** whether a transcript is canonical.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_CANONICAL?: Maybe<Scalars['String']['output']>;
  /** CCDS IDs corresponding to transcripts.\nMultiple IDs are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_CCDS?: Maybe<Scalars['String']['output']>;
  /** CDS position as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_CDS_position?: Maybe<Scalars['String']['output']>;
  /** codon change or distance as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_Codon_Change_or_Distance?: Maybe<Scalars['String']['output']>;
  /** VEP consequence with Ensembl as gene model.\nMultiple consequences are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_Consequence?: Maybe<Scalars['String']['output']>;
  /** exon (intron) rank as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_Exon_or_Intron_Rank?: Maybe<Scalars['String']['output']>;
  /** The complete GO biological process annotations queried through PANTHER API for IDs corresponding to VEP_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  VEP_ensembl_GO_biological_process_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO cellular component annotations queried through PANTHER API for IDs corresponding to VEP_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  VEP_ensembl_GO_cellular_component_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO molecular function annotations queried through PANTHER API for IDs corresponding to VEP_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  VEP_ensembl_GO_molecular_function_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** Ensembl gene IDs corresponding to transcripts.\nMultiple IDs are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_Gene_ID?: Maybe<Scalars['String']['output']>;
  /** Ensembl gene names corresponding to transcripts.\nMultiple gene names are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_Gene_Name?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSc.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_HGVSc?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSp.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_HGVSp?: Maybe<Scalars['String']['output']>;
  /** LOF by LOFTEE.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_LoF?: Maybe<Scalars['String']['output']>;
  /** LOF filter by LOFTEE.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_LoF_filter?: Maybe<Scalars['String']['output']>;
  /** LOF flags by LOFTEE.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_LoF_flags?: Maybe<Scalars['String']['output']>;
  /** LOF information by LOFTEE.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_LoF_info?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Biological Process annotations queried through PANTHER API for IDs corresponding to VEP_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  VEP_ensembl_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Cellular Component annotations queried through PANTHER API for IDs corresponding to VEP_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  VEP_ensembl_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Molecular Function annotations queried through PANTHER API for IDs corresponding to VEP_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  VEP_ensembl_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER pathway annotations queried through PANTHER API for IDs corresponding to VEP_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Pathways from all genes is shown here. */
  VEP_ensembl_PANTHER_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Protein Class annotations queried through PANTHER API for IDs corresponding to VEP_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Protein Class terms from all genes is shown here. */
  VEP_ensembl_PANTHER_protein_class_list_id?: Maybe<Scalars['String']['output']>;
  /** Ensembl protein IDs corresponding to transcripts.\nMultiple IDs are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_Protein_ID?: Maybe<Scalars['String']['output']>;
  /** protein position as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_Protein_position?: Maybe<Scalars['String']['output']>;
  /** The Reactome Pathway annotations queried through PANTHER API for IDs corresponding to VEP_ensembl_Gene_ID column. If there is more than one gene ID, a non-redundant list of Reactome Pathways from all genes is shown here. */
  VEP_ensembl_REACTOME_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** strand of CDS as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_STRAND?: Maybe<Scalars['String']['output']>;
  /** SWISSPROT IDs corresponding to transcripts.\nMultiple IDs are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_SWISSPROT?: Maybe<Scalars['String']['output']>;
  /** Ensembl transcript IDs corresponding to consequences.\nMultiple IDs are separated by "|" */
  VEP_ensembl_Transcript_ID?: Maybe<Scalars['String']['output']>;
  /** cDNA position as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_ensembl_Transcript_ID */
  VEP_ensembl_cDNA_position?: Maybe<Scalars['String']['output']>;
  /** VEP consequence summary with Ensembl as gene model.\nFormat GeneID(total number of transcripts):consequence#1(number of transcripts affected) consequence#2(number of transcripts affected)... Multiple genes are separated by "|"\nGeneID(total number of transcripts):consequence#1(number of transcripts affected)\nconsequence#2(number of transcripts affected)... Multiple genes are separated by "|" */
  VEP_ensembl_summary?: Maybe<Scalars['String']['output']>;
  /** amino acid change as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID "*" represents a stop codon\nThe order corresponds to VEP_refseq_Transcript_ID\n"*" represents a stop codon */
  VEP_refseq_Amino_Acid_Change?: Maybe<Scalars['String']['output']>;
  /** whether a transcript is canonical.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_CANONICAL?: Maybe<Scalars['String']['output']>;
  /** CDS position as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_CDS_position?: Maybe<Scalars['String']['output']>;
  /** codon change or distance as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_Codon_Change_or_Distance?: Maybe<Scalars['String']['output']>;
  /** VEP consequence with RefSeq as gene model.\nMultiple consequences are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_Consequence?: Maybe<Scalars['String']['output']>;
  /** exon (intron) rank as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_Exon_or_Intron_Rank?: Maybe<Scalars['String']['output']>;
  /** The complete GO biological process annotations queried through PANTHER API for IDs corresponding to  VEP_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  VEP_refseq_GO_biological_process_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO cellular component annotations queried through PANTHER API for IDs corresponding to VEP_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  VEP_refseq_GO_cellular_component_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO molecular function annotations queried through PANTHER API for IDs corresponding to VEP_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  VEP_refseq_GO_molecular_function_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** RefSeq gene IDs corresponding to transcripts.\nMultiple IDs are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_Gene_ID?: Maybe<Scalars['String']['output']>;
  /** RefSeq gene names corresponding to transcripts.\nMultiple gene names are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_Gene_Name?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSc.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_HGVSc?: Maybe<Scalars['String']['output']>;
  /** variant in format of HGVSp.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_HGVSp?: Maybe<Scalars['String']['output']>;
  /** LOF by LOFTEE.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_LoF?: Maybe<Scalars['String']['output']>;
  /** LOF filter by LOFTEE.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_LoF_filter?: Maybe<Scalars['String']['output']>;
  /** LOF flags by LOFTEE.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_LoF_flags?: Maybe<Scalars['String']['output']>;
  /** LOF information by LOFTEE.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_LoF_info?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Biological Process annotations queried through PANTHER API for IDs corresponding to VEP_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here.. */
  VEP_refseq_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Cellular Component annotations queried through PANTHER API for IDs corresponding to VEP_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  VEP_refseq_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Molecular Function annotations queried through PANTHER API for IDs corresponding to VEP_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of GO terms from all genes is shown here. */
  VEP_refseq_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER pathway annotations queried through PANTHER API for IDs corresponding to VEP_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Pathways from all genes is shown here. */
  VEP_refseq_PANTHER_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Protein Class annotations queried through PANTHER API for IDs corresponding to VEP_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of PANTHER Protein Class terms from all genes is shown here. */
  VEP_refseq_PANTHER_protein_class_list_id?: Maybe<Scalars['String']['output']>;
  /** refseq protein IDs corresponding to transcripts.\nMultiple IDs are separated by "|" The order corresponds to VEP_ensembl_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_Protein_ID?: Maybe<Scalars['String']['output']>;
  /** protein position as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_Protein_position?: Maybe<Scalars['String']['output']>;
  /** The Reactome Pathway annotations queried through PANTHER API for IDs corresponding to VEP_refseq_Transcript_ID column. If there is more than one gene ID, a non-redundant list of Reactome Pathways from all genes is shown here. */
  VEP_refseq_REACTOME_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** strand of CDS as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_STRAND?: Maybe<Scalars['String']['output']>;
  /** RefSeq transcript IDs corresponding to consequences.\nMultiple IDs are separated by "|" */
  VEP_refseq_Transcript_ID?: Maybe<Scalars['String']['output']>;
  /** cDNA position as to a transcript.\nMultiple annotations are separated by "|" The order corresponds to VEP_refseq_Transcript_ID\nThe order corresponds to VEP_refseq_Transcript_ID */
  VEP_refseq_cDNA_position?: Maybe<Scalars['String']['output']>;
  /** VEP consequence summary with RefSeq as gene model.\nFormat GeneID(total number of transcripts):consequence#1(number of transcripts affected) consequence#2(number of transcripts affected)... Multiple genes are separated by "|"\nGeneID(total number of transcripts):consequence#1(number of transcripts affected)\nconsequence#2(number of transcripts affected)... Multiple genes are separated by "|" */
  VEP_refseq_summary?: Maybe<Scalars['String']['output']>;
  /** Alternative allele counts in the whole 1000 genomes phase 3 (1000Gp3) data. */
  _1000Gp3_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the whole 1000Gp3 data. */
  _1000Gp3_AF?: Maybe<Scalars['Float']['output']>;
  /** Alternative allele counts in the 1000Gp3 African descendent samples. */
  _1000Gp3_AFR_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the 1000Gp3 African descendent samples. */
  _1000Gp3_AFR_AF?: Maybe<Scalars['Float']['output']>;
  /** Alternative allele counts in the 1000Gp3 American descendent samples. */
  _1000Gp3_AMR_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the 1000Gp3 American descendent samples. */
  _1000Gp3_AMR_AF?: Maybe<Scalars['Float']['output']>;
  /** Alternative allele counts in the 1000Gp3 East Asian descendent samples. */
  _1000Gp3_EAS_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the 1000Gp3 East Asian descendent samples. */
  _1000Gp3_EAS_AF?: Maybe<Scalars['Float']['output']>;
  /** Alternative allele counts in the 1000Gp3 European descendent samples. */
  _1000Gp3_EUR_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the 1000Gp3 European descendent samples. */
  _1000Gp3_EUR_AF?: Maybe<Scalars['Float']['output']>;
  /** Alternative allele counts in the 1000Gp3 South Asian descendent samples. */
  _1000Gp3_SAS_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the 1000Gp3 South Asian descendent samples. */
  _1000Gp3_SAS_AF?: Maybe<Scalars['Float']['output']>;
  /** alternative amino acid\n"." if the variant is a splicing site SNP (2bp on each end of an intron) */
  aaalt?: Maybe<Scalars['String']['output']>;
  /** amino acid position as to the protein.\n"-1" if the variant is a splicing site SNP (2bp on each end of an intron). Multiple entries separated by ";", corresponding to Ensembl_proteinid\nMultiple entries separated by ";", corresponding to Ensembl_proteinid */
  aapos?: Maybe<Scalars['String']['output']>;
  /** reference amino acid\n"." if the variant is a splicing site SNP (2bp on each end of an intron) */
  aaref?: Maybe<Scalars['String']['output']>;
  /** The alternative allele of the variant. */
  alt?: Maybe<Scalars['String']['output']>;
  /** coding sequence (CDS) strand (+ or -) */
  cds_strand?: Maybe<Scalars['String']['output']>;
  /** Chromosome number of the variant. */
  chr?: Maybe<Scalars['String']['output']>;
  /** MedGen ID of the trait/disease the clinvar_trait referring to */
  clinvar_MedGen_id?: Maybe<Scalars['String']['output']>;
  /** OMIM ID of the trait/disease the clinvar_trait referring to */
  clinvar_OMIM_id?: Maybe<Scalars['String']['output']>;
  /** Orphanet ID of the trait/disease the clinvar_trait referring to */
  clinvar_Orphanet_id?: Maybe<Scalars['String']['output']>;
  /** clinical significance by clinvar\nPossible values Benign, Likely_benign, Likely_pathogenic, Pathogenic, drug_response, histocompatibility. A negative score means the score is for the ref allele\nBenign, Likely_benign, Likely_pathogenic, Pathogenic, drug_response,\nhistocompatibility. A negative score means the score is for the ref allele */
  clinvar_clnsig?: Maybe<Scalars['String']['output']>;
  /** variant in HGVS format */
  clinvar_hgvs?: Maybe<Scalars['String']['output']>;
  /** clinvar variation ID */
  clinvar_id?: Maybe<Scalars['String']['output']>;
  /** ClinVar Review Status summary\nPossible values  no assertion criteria provided, criteria provided, single submitter, criteria provided, multiple submitters, no conflicts, reviewed by expert panel, practice guideline\n no assertion criteria provided, criteria provided, single submitter,\ncriteria provided, multiple submitters, no conflicts, reviewed by expert panel, practice guideline */
  clinvar_review?: Maybe<Scalars['String']['output']>;
  /** the trait/disease the clinvar_clnsig referring to */
  clinvar_trait?: Maybe<Scalars['String']['output']>;
  /** source of the variant */
  clinvar_var_source?: Maybe<Scalars['String']['output']>;
  /** degenerate type (0, 2 or 3) */
  codon_degeneracy?: Maybe<Scalars['String']['output']>;
  /** position on the codon (1, 2 or 3) */
  codonpos?: Maybe<Scalars['String']['output']>;
  /** When the variant is located in an enhancer region, the complete GO biological process annotations of its target genes inferred from the enhancer-gene links in the PEREGRINE project are populated here. */
  enhancer_linked_GO_biological_process_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** When the variant is located in an enhancer region, the complete GO cellular component annotations of its target genes inferred from the enhancer-gene links in the PEREGRINE project are populated here. */
  enhancer_linked_GO_cellular_component_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** When the variant is located in an enhancer region, the complete GO molecular function annotations of its target genes inferred from the enhancer-gene links in the PEREGRINE project are populated here. */
  enhancer_linked_GO_molecular_function_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** When the variant is located in an enhancer region, the PANTHER GO-Slim Biological Process annotations of its target genes inferred from the enhancer-gene links in the PEREGRINE project are populated here. */
  enhancer_linked_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<Scalars['String']['output']>;
  /** When the variant is located in an enhancer region, the PANTHER GO-Slim Cellular Component annotations of its target genes inferred from the enhancer-gene links in the PEREGRINE project are populated here. */
  enhancer_linked_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<Scalars['String']['output']>;
  /** When the variant is located in an enhancer region, the PANTHER GO-Slim Molecular Function annotations of its target genes inferred from the enhancer-gene links in the PEREGRINE project are populated here. */
  enhancer_linked_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<Scalars['String']['output']>;
  /** When the variant is located in an enhancer region, the PANTHER pathway annotations of its target genes inferred from the enhancer-gene links in the PEREGRINE project are populated here. */
  enhancer_linked_PANTHER_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** When the variant is located in an enhancer region, the PANTHER Protein Class annotations of its target genes inferred from the enhancer-gene links in the PEREGRINE project are populated here. */
  enhancer_linked_PANTHER_protein_class_list_id?: Maybe<Scalars['String']['output']>;
  /** When the variant is located in an enhancer region, the Reactome pathway annotations of its target genes inferred from the enhancer-gene links in the PEREGRINE project are populated here. */
  enhancer_linked_REACTOME_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** When the variant is located in an enhancer region, the assay data used to infer its link to the target genes by the PEREGRINE project are listed here. For example, single tissue eQTL, interactive TAD, ChIA-PET. These assays are usually tissue-specific. The tissue data is in the 'PEREGRINE_enhancer_linked_tissue' annotation. */
  enhancer_linked_assay?: Maybe<Scalars['String']['output']>;
  /** The PEREGRINE enhancer ID of an enhancer region where the variant is located */
  enhancer_linked_enhancer?: Maybe<Scalars['String']['output']>;
  /** When the variant is located in an enhancer region, its target genes inferred from the enhancer-gene links in the PEREGRINE project are populated here. */
  enhancer_linked_genes?: Maybe<Scalars['String']['output']>;
  /** fathmm-MKL coding group, the feature group used for the coding prediction. */
  fathmm_MKL_coding_group?: Maybe<Scalars['String']['output']>;
  /** If a fathmm-MKL_coding_score is >0.5 the corresponding nsSNV\nis predicted as "D(AMAGING)"; otherwise it is predicted as "N(EUTRAL)". */
  fathmm_MKL_coding_pred?: Maybe<Scalars['String']['output']>;
  /** the rank of the fathmm-MKL_coding_score among all fathmm-MKL_coding_scores in genome */
  fathmm_MKL_coding_rankscore?: Maybe<Scalars['Float']['output']>;
  /** fathmm-MKL coding prediction probability, the larger the number the more likely damaging\nthe threshold separating deleterious prediction and neutral prediction is 0.5. */
  fathmm_MKL_coding_score?: Maybe<Scalars['Float']['output']>;
  /** fathmm-MKL non-coding group, the feature group used for the non-coding prediction */
  fathmm_MKL_non_coding_group?: Maybe<Scalars['String']['output']>;
  /** If a fathmm-MKL_non-coding_score is >0.5 the corresponding nsSNV\nis predicted as "D(AMAGING)"; otherwise it is predicted as "N(EUTRAL)". */
  fathmm_MKL_non_coding_pred?: Maybe<Scalars['String']['output']>;
  /** the rank of the fathmm-MKL_non-coding_score among all fathmm-MKL_non-coding_scores in genome */
  fathmm_MKL_non_coding_rankscore?: Maybe<Scalars['Float']['output']>;
  /** fathmm-MKL non-coding prediction probability, the larger the number the more likely damaging;\nthe threshold separating deleterious prediction and neutral prediction is 0.5. */
  fathmm_MKL_non_coding_score?: Maybe<Scalars['Float']['output']>;
  /** whether the prediction is based on the model for coding region\nor noncoding region */
  fathmm_XF_coding_or_noncoding?: Maybe<Scalars['String']['output']>;
  /** If a fathmm-XF_score is >0.5 the corresponding nsSNV\nis predicted as "D(AMAGING)"; otherwise it is predicted as "N(EUTRAL)". */
  fathmm_XF_pred?: Maybe<Scalars['String']['output']>;
  /** the rank of the fathmm-XF_score among all fathmm-XF_scores in genome */
  fathmm_XF_rankscore?: Maybe<Scalars['Float']['output']>;
  /** fathmm-XF prediction probability, the larger the number the more likely damaging;\nthe threshold separating deleterious prediction and neutral prediction is 0.5. */
  fathmm_XF_score?: Maybe<Scalars['Float']['output']>;
  /** The complete GO biological process annotations queried through PANTHER API for the gene(s) when the variant is within the gene region with 0 flanking region. */
  flanking_0_GO_biological_process_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO cellular component annotations queried through PANTHER API for the gene(s) when the variant is within the gene region with 0 flanking region. */
  flanking_0_GO_cellular_component_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO molecular function annotations queried through PANTHER API for the gene(s) when the variant is within the gene region with 0 flanking region. */
  flanking_0_GO_molecular_function_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Biological Process annotations queried through PANTHER API for the gene(s) when the variant is within the gene region with 0 flanking region. */
  flanking_0_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Cellular Component annotations queried through PANTHER API for the gene(s) when the variant is within the gene region with 0 flanking region. */
  flanking_0_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Molecular Function annotations queried through PANTHER API for the gene(s) when the variant is within the gene region with 0 flanking region. */
  flanking_0_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Pathway annotations queried through PANTHER API for the gene(s) when the variant is within the gene region with 0 flanking region. */
  flanking_0_PANTHER_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Protein Class annotations queried through PANTHER API for the gene(s) when the variant is within the gene region with 0 flanking region. */
  flanking_0_PANTHER_protein_class_list_id?: Maybe<Scalars['String']['output']>;
  /** The Reactome Pathway annotations queried through PANTHER API for the gene(s) when the variant is within the gene region with 0 flanking region. */
  flanking_0_REACTOME_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO biological process annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 10k flanking regions on either end. */
  flanking_10000_GO_biological_process_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO cellular component annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 10k flanking regions on either end. */
  flanking_10000_GO_cellular_component_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO molecular function annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 10k flanking regions on either end. */
  flanking_10000_GO_molecular_function_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Biological Process annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 10k flanking regions on either end. */
  flanking_10000_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Cellular Component annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 10k flanking regions on either end. */
  flanking_10000_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Molecular Function annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 10k flanking regions on either end. */
  flanking_10000_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Pathway annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 10k flanking regions on either end. */
  flanking_10000_PANTHER_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Protein Class annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 10k flanking regions on either end. */
  flanking_10000_PANTHER_protein_class_list_id?: Maybe<Scalars['String']['output']>;
  /** The Reactome Pathway annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 10k flanking regions on either end. */
  flanking_10000_REACTOME_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO biological process annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 20k flanking regions on either end. */
  flanking_20000_GO_biological_process_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO cellular component annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 20k flanking regions on either end. */
  flanking_20000_GO_cellular_component_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The complete GO molecular function annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 20k flanking regions on either end. */
  flanking_20000_GO_molecular_function_complete_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Biological Process annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 20k flanking regions on either end. */
  flanking_20000_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Cellular Component annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 20k flanking regions on either end. */
  flanking_20000_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER GO-Slim Molecular Function annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 20k flanking regions on either end. */
  flanking_20000_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Pathway annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 20k flanking regions on either end. */
  flanking_20000_PANTHER_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** The PANTHER Pathway annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 20k flanking regions on either end. */
  flanking_20000_PANTHER_protein_class_list_id?: Maybe<Scalars['String']['output']>;
  /** The Reactome Pathway annotations queried through PANTHER API for the gene(s) when the variant is within the gene region plus 20k flanking regions on either end. */
  flanking_20000_REACTOME_pathway_list_id?: Maybe<Scalars['String']['output']>;
  /** funseq-like noncoding score range 0-6, each of the previous 5 columns\ncontribute 1 if "YES", or 0 if "NO"; the column Motif_breaking contribute 1 if it is not a "."\nnot a "." */
  funseq_noncoding_score?: Maybe<Scalars['Int']['output']>;
  /** gene name; if the nsSNV can be assigned to multiple genes, gene names are\nseparated by ";" */
  genename?: Maybe<Scalars['String']['output']>;
  /** Alternative allele count in the whole gnomAD exome samples (125,748 samples) */
  gnomAD_exomes_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the whole gnomAD exome samples (125,748 samples) */
  gnomAD_exomes_AF?: Maybe<Scalars['Float']['output']>;
  /** Alternative allele count in the African/African American gnomAD exome samples (8,128 samples) */
  gnomAD_exomes_AFR_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the African/African American gnomAD exome samples (8,128 samples) */
  gnomAD_exomes_AFR_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in the African/African American gnomAD exome samples (8,128 samples) */
  gnomAD_exomes_AFR_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the African/African American gnomAD exome samples (8,128 samples) */
  gnomAD_exomes_AFR_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the Latino gnomAD exome samples (17,296 samples) */
  gnomAD_exomes_AMR_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the Latino gnomAD exome samples (17,296 samples) */
  gnomAD_exomes_AMR_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in the Latino gnomAD exome samples (17,296 samples) */
  gnomAD_exomes_AMR_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the Latino gnomAD exome samples (17,296 samples) */
  gnomAD_exomes_AMR_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Total allele count in the whole gnomAD exome samples (125,748 samples) */
  gnomAD_exomes_AN?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the Ashkenazi Jewish gnomAD exome samples (5,040 samples) */
  gnomAD_exomes_ASJ_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the Ashkenazi Jewish gnomAD exome samples (5,040 samples) */
  gnomAD_exomes_ASJ_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the Ashkenazi Jewish gnomAD exome samples (5,040 samples) */
  gnomAD_exomes_ASJ_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the Ashkenazi Jewish gnomAD exome samples (5,040 samples) */
  gnomAD_exomes_ASJ_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the East Asian gnomAD exome samples (9,197 samples) */
  gnomAD_exomes_EAS_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the East Asian gnomAD exome samples (9,197 samples) */
  gnomAD_exomes_EAS_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the East Asian gnomAD exome samples (9,197 samples) */
  gnomAD_exomes_EAS_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the East Asian gnomAD exome samples (9,197 samples) */
  gnomAD_exomes_EAS_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the Finnish gnomAD exome samples (10,824 samples) */
  gnomAD_exomes_FIN_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the Finnish gnomAD exome samples (10,824 samples) */
  gnomAD_exomes_FIN_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the Finnish gnomAD exome samples (10,824 samples) */
  gnomAD_exomes_FIN_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the Finnish gnomAD exome samples (10,824 samples) */
  gnomAD_exomes_FIN_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the Non-Finnish European gnomAD exome samples (56,885 samples) */
  gnomAD_exomes_NFE_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the Non-Finnish European gnomAD exome samples (56,885 samples) */
  gnomAD_exomes_NFE_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in the Non-Finnish European gnomAD exome samples (56,885 samples) */
  gnomAD_exomes_NFE_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the Non-Finnish European gnomAD exome samples (56,885 samples) */
  gnomAD_exomes_NFE_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Allele count in the population with the maximum AF */
  gnomAD_exomes_POPMAX_AC?: Maybe<Scalars['Int']['output']>;
  /** Maximum allele frequency across populations (excluding samples of Ashkenazi, Finnish, and indeterminate ancestry) */
  gnomAD_exomes_POPMAX_AF?: Maybe<Scalars['String']['output']>;
  /** Total number of alleles in the population with the maximum AF */
  gnomAD_exomes_POPMAX_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of homozygous individuals in the population with the maximum allele frequency */
  gnomAD_exomes_POPMAX_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the South Asian gnomAD exome samples (15,308 samples) */
  gnomAD_exomes_SAS_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the South Asian gnomAD exome samples (15,308 samples) */
  gnomAD_exomes_SAS_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in the South Asian gnomAD exome samples (15,308 samples) */
  gnomAD_exomes_SAS_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the South Asian gnomAD exome samples (15,308 samples) */
  gnomAD_exomes_SAS_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of whole gnomAD exome samples (54,704 samples) */
  gnomAD_exomes_controls_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of whole gnomAD exome samples (54,704 samples) */
  gnomAD_exomes_controls_AF?: Maybe<Scalars['Float']['output']>;
  /** Alternative allele count in the controls subset of African/African American gnomAD exome samples (3,582 samples) */
  gnomAD_exomes_controls_AFR_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of African/African American gnomAD exome samples (3,582 samples) */
  gnomAD_exomes_controls_AFR_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in the controls subset of African/African American gnomAD exome samples (3,582 samples) */
  gnomAD_exomes_controls_AFR_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of African/African American gnomAD exome samples (3,582 samples) */
  gnomAD_exomes_controls_AFR_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of Latino gnomAD exome samples (8,556 samples) */
  gnomAD_exomes_controls_AMR_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of Latino gnomAD exome samples (8,556 samples) */
  gnomAD_exomes_controls_AMR_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in the controls subset of Latino gnomAD exome samples (8,556 samples) */
  gnomAD_exomes_controls_AMR_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of Latino gnomAD exome samples (8,556 samples) */
  gnomAD_exomes_controls_AMR_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Total allele count in the controls subset of whole gnomAD exome samples (54,704 samples) */
  gnomAD_exomes_controls_AN?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of Ashkenazi Jewish gnomAD exome samples (1,160 samples) */
  gnomAD_exomes_controls_ASJ_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of Ashkenazi Jewish gnomAD exome samples (1,160 samples) */
  gnomAD_exomes_controls_ASJ_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the controls subset of Ashkenazi Jewish gnomAD exome samples (1,160 samples) */
  gnomAD_exomes_controls_ASJ_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of Ashkenazi Jewish gnomAD exome samples (1,160 samples) */
  gnomAD_exomes_controls_ASJ_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of East Asian gnomAD exome samples (4,523 samples) */
  gnomAD_exomes_controls_EAS_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of East Asian gnomAD exome samples (4,523 samples) */
  gnomAD_exomes_controls_EAS_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the controls subset of East Asian gnomAD exome samples (4,523 samples) */
  gnomAD_exomes_controls_EAS_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of East Asian gnomAD exome samples (4,523 samples) */
  gnomAD_exomes_controls_EAS_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of Finnish gnomAD exome samples (6,697 samples) */
  gnomAD_exomes_controls_FIN_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of Finnish gnomAD exome samples (6,697 samples) */
  gnomAD_exomes_controls_FIN_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the controls subset of Finnish gnomAD exome samples (6,697 samples) */
  gnomAD_exomes_controls_FIN_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of Finnish gnomAD exome samples (6,697 samples) */
  gnomAD_exomes_controls_FIN_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of Non-Finnish European gnomAD exome samples (21,384 samples) */
  gnomAD_exomes_controls_NFE_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of Non-Finnish European gnomAD exome samples (21,384 samples) */
  gnomAD_exomes_controls_NFE_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in the controls subset of Non-Finnish European gnomAD exome samples (21,384 samples) */
  gnomAD_exomes_controls_NFE_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of Non-Finnish European gnomAD exome samples (21,384 samples) */
  gnomAD_exomes_controls_NFE_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Allele count in the controls subset of population with the maximum AF */
  gnomAD_exomes_controls_POPMAX_AC?: Maybe<Scalars['Int']['output']>;
  /** Maximum allele frequency across populations (excluding samples of Ashkenazi, Finnish, and indeterminate ancestry) in the controls subset */
  gnomAD_exomes_controls_POPMAX_AF?: Maybe<Scalars['String']['output']>;
  /** Total number of alleles in the controls subset of population with the maximum AF */
  gnomAD_exomes_controls_POPMAX_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of homozygous individuals in the controls subset of population with the maximum allele frequency */
  gnomAD_exomes_controls_POPMAX_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of South Asian gnomAD exome samples (7,845 samples) */
  gnomAD_exomes_controls_SAS_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of South Asian gnomAD exome samples (7,845 samples) */
  gnomAD_exomes_controls_SAS_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in the controls subset of South Asian gnomAD exome samples (7,845 samples) */
  gnomAD_exomes_controls_SAS_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of South Asian gnomAD exome samples (7,845 samples) */
  gnomAD_exomes_controls_SAS_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of whole gnomAD exome samples (54,704 samples) */
  gnomAD_exomes_controls_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** information from gnomAD exome data indicating whether the variant falling within low-complexity\n(lcr) or segmental duplication (segdup) or decoy regions. The flag can be either "." for high-quality PASS or not reported/polymorphic in gnomAD exomes, "lcr" for within lcr, "segdup" for within segdup, or "decoy" for with decoy region.\nreported/polymorphic in gnomAD exomes, "lcr" for within lcr, "segdup" for within segdup, or "decoy" for\nwith decoy region. */
  gnomAD_exomes_flag?: Maybe<Scalars['String']['output']>;
  /** Count of individuals with homozygous alternative allele in the whole gnomAD exome samples (125,748 samples) */
  gnomAD_exomes_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the whole gnomAD genome samples (15,708 samples) */
  gnomAD_genomes_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the whole gnomAD genome samples (15,708 samples) */
  gnomAD_genomes_AF?: Maybe<Scalars['Float']['output']>;
  /** Alternative allele count in the African/African American gnomAD genome samples (4,359 samples) */
  gnomAD_genomes_AFR_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the African/African American gnomAD genome samples (4,359 samples) */
  gnomAD_genomes_AFR_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in the African/African American gnomAD genome samples (4,359 samples) */
  gnomAD_genomes_AFR_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the African/African American gnomAD genome samples (4,359 samples) */
  gnomAD_genomes_AFR_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the Latino gnomAD genome samples (424 samples) */
  gnomAD_genomes_AMR_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the Latino gnomAD genome samples (424 samples) */
  gnomAD_genomes_AMR_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the Latino gnomAD genome samples (424 samples) */
  gnomAD_genomes_AMR_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the Latino gnomAD genome samples (424 samples) */
  gnomAD_genomes_AMR_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Total allele count in the whole gnomAD genome samples (15,708 samples) */
  gnomAD_genomes_AN?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the Ashkenazi Jewish gnomAD genome samples (145 samples) */
  gnomAD_genomes_ASJ_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the Ashkenazi Jewish gnomAD genome samples (145 samples) */
  gnomAD_genomes_ASJ_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the Ashkenazi Jewish gnomAD genome samples (145 samples) */
  gnomAD_genomes_ASJ_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the Ashkenazi Jewish gnomAD genome samples (145 samples) */
  gnomAD_genomes_ASJ_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the East Asian gnomAD genome samples (780 samples) */
  gnomAD_genomes_EAS_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the East Asian gnomAD genome samples (780 samples) */
  gnomAD_genomes_EAS_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the East Asian gnomAD genome samples (780 samples) */
  gnomAD_genomes_EAS_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the East Asian gnomAD genome samples (780 samples) */
  gnomAD_genomes_EAS_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the Finnish gnomAD genome samples (1,738 samples) */
  gnomAD_genomes_FIN_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the Finnish gnomAD genome samples (1,738 samples) */
  gnomAD_genomes_FIN_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the Finnish gnomAD genome samples (1,738 samples) */
  gnomAD_genomes_FIN_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the Finnish gnomAD genome samples (1,738 samples) */
  gnomAD_genomes_FIN_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the Non-Finnish European gnomAD genome samples (7,718 samples) */
  gnomAD_genomes_NFE_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the Non-Finnish European gnomAD genome samples (7,718 samples) */
  gnomAD_genomes_NFE_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in the Non-Finnish European gnomAD genome samples (7,718 samples) */
  gnomAD_genomes_NFE_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the Non-Finnish European gnomAD genome samples (7,718 samples) */
  gnomAD_genomes_NFE_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Allele count in the population with the maximum AF */
  gnomAD_genomes_POPMAX_AC?: Maybe<Scalars['Int']['output']>;
  /** Maximum allele frequency across populations (excluding samples of Ashkenazi, Finnish, and indeterminate ancestry) */
  gnomAD_genomes_POPMAX_AF?: Maybe<Scalars['String']['output']>;
  /** Total number of alleles in the population with the maximum AF */
  gnomAD_genomes_POPMAX_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of homozygous individuals in the population with the maximum allele frequency */
  gnomAD_genomes_POPMAX_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of whole gnomAD genome samples (5,442 samples) */
  gnomAD_genomes_controls_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of whole gnomAD genome samples (5,442 samples) */
  gnomAD_genomes_controls_AF?: Maybe<Scalars['Float']['output']>;
  /** Alternative allele count in the controls subset of African/African American gnomAD genome samples (1,287 samples) */
  gnomAD_genomes_controls_AFR_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of African/African American gnomAD genome samples (1,287 samples) */
  gnomAD_genomes_controls_AFR_AF?: Maybe<Scalars['Float']['output']>;
  /** Total allele count in the controls subset of African/African American gnomAD genome samples (1,287 samples) */
  gnomAD_genomes_controls_AFR_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of African/African American gnomAD genome samples (1,287 samples) */
  gnomAD_genomes_controls_AFR_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of Latino gnomAD genome samples (123 samples) */
  gnomAD_genomes_controls_AMR_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of Latino gnomAD genome samples (123 samples) */
  gnomAD_genomes_controls_AMR_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the controls subset of Latino gnomAD genome samples (123 samples) */
  gnomAD_genomes_controls_AMR_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of Latino gnomAD genome samples (123 samples) */
  gnomAD_genomes_controls_AMR_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Total allele count in the controls subset of whole gnomAD genome samples (5,442 samples) */
  gnomAD_genomes_controls_AN?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of Ashkenazi Jewish gnomAD genome samples (19 samples) */
  gnomAD_genomes_controls_ASJ_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of Ashkenazi Jewish gnomAD genome samples (145 samples) */
  gnomAD_genomes_controls_ASJ_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the controls subset of Ashkenazi Jewish gnomAD genome samples (19 samples) */
  gnomAD_genomes_controls_ASJ_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of Ashkenazi Jewish gnomAD genome samples (19 samples) */
  gnomAD_genomes_controls_ASJ_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of East Asian gnomAD genome samples (458 samples) */
  gnomAD_genomes_controls_EAS_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of East Asian gnomAD genome samples (458 samples) */
  gnomAD_genomes_controls_EAS_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the controls subset of East Asian gnomAD genome samples (458 samples) */
  gnomAD_genomes_controls_EAS_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of East Asian gnomAD genome samples (458 samples) */
  gnomAD_genomes_controls_EAS_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of Finnish gnomAD genome samples (581 samples) */
  gnomAD_genomes_controls_FIN_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of Finnish gnomAD genome samples (581 samples) */
  gnomAD_genomes_controls_FIN_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the controls subset of Finnish gnomAD genome samples (581 samples) */
  gnomAD_genomes_controls_FIN_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of Finnish gnomAD genome samples (581 samples) */
  gnomAD_genomes_controls_FIN_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele count in the controls subset of Non-Finnish European gnomAD genome samples (2,762 samples) */
  gnomAD_genomes_controls_NFE_AC?: Maybe<Scalars['Int']['output']>;
  /** Alternative allele frequency in the controls subset of Non-Finnish European gnomAD genome samples (2,762 samples) */
  gnomAD_genomes_controls_NFE_AF?: Maybe<Scalars['String']['output']>;
  /** Total allele count in the controls subset of Non-Finnish European gnomAD genome samples (2,762 samples) */
  gnomAD_genomes_controls_NFE_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of Non-Finnish European gnomAD genome samples (2,762 samples) */
  gnomAD_genomes_controls_NFE_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Allele count in the controls subset of population with the maximum AF */
  gnomAD_genomes_controls_POPMAX_AC?: Maybe<Scalars['Int']['output']>;
  /** Maximum allele frequency across populations (excluding samples of Ashkenazi, Finnish, and indeterminate ancestry) in the controls subset */
  gnomAD_genomes_controls_POPMAX_AF?: Maybe<Scalars['String']['output']>;
  /** Total number of alleles in the controls subset of population with the maximum AF */
  gnomAD_genomes_controls_POPMAX_AN?: Maybe<Scalars['Int']['output']>;
  /** Count of homozygous individuals in the controls subset of population with the maximum allele frequency */
  gnomAD_genomes_controls_POPMAX_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** Count of individuals with homozygous alternative allele in the controls subset of whole gnomAD genome samples (5,442 samples) */
  gnomAD_genomes_controls_nhomalt?: Maybe<Scalars['Int']['output']>;
  /** information from gnomAD genome data indicating whether the variant falling within low-complexity\n(lcr) or segmental duplication (segdup) or decoy regions. The flag can be either "." for high-quality PASS or not reported/polymorphic in gnomAD exomes, "lcr" for within lcr, "segdup" for within segdup, or "decoy" for with decoy region.\nreported/polymorphic in gnomAD exomes, "lcr" for within lcr, "segdup" for within segdup, or "decoy" for\nwith decoy region. */
  gnomAD_genomes_flag?: Maybe<Scalars['String']['output']>;
  /** Count of individuals with homozygous alternative allele in the whole gnomAD genome samples (15,708 samples) */
  gnomAD_genomes_nhomalt?: Maybe<Scalars['Int']['output']>;
  id?: Maybe<Scalars['String']['output']>;
  /** whether the target gene is a network hub based on funseq-0.1 */
  network_hub?: Maybe<Scalars['String']['output']>;
  /** Position of the variant. */
  pos?: Maybe<Scalars['Int']['output']>;
  /** The reference base of the variant. */
  ref?: Maybe<Scalars['String']['output']>;
  /** reference codon */
  refcodon?: Maybe<Scalars['String']['output']>;
  /** dbSNP ID if available. The current release supports rs IDs from dbSNP build 151. */
  rs_dbSNP151?: Maybe<Scalars['String']['output']>;
  /** whether defined as sensitive region based on funseq-0.1 */
  sensitive?: Maybe<Scalars['String']['output']>;
  /** the name of snoRNA or miRNA if the site is located within (from miRBase/snoRNABase) */
  sno_miRNA_name?: Maybe<Scalars['String']['output']>;
  /** the type of snoRNA or miRNA (from miRBase/snoRNABase) */
  sno_miRNA_type?: Maybe<Scalars['String']['output']>;
  /** splicing-change prediction for splicing consensus SNPs\nbased on adaboost. If the score >0.6, it predicts that the splicing will be changed, otherwise it predicts the splicing will not be changed.\notherwise it predicts the splicing will not be changed. */
  splicing_consensus_ada_score?: Maybe<Scalars['Float']['output']>;
  /** splicing-change prediction for splicing consensus SNPs\nbased on random forest. If the score >0.6, it predicts that the splicing will be changed, otherwise it predicts the splicing will not be changed\notherwise it predicts the splicing will not be changed */
  splicing_consensus_rf_score?: Maybe<Scalars['Float']['output']>;
  /** target gene (for promoter, enhancer, etc.) based on funseq-0.1 */
  target_gene?: Maybe<Scalars['String']['output']>;
  /** whether defined as ultra-sensitive region based funseq-0.1 */
  ultra_sensitive?: Maybe<Scalars['String']['output']>;
};

export type SnpAggs = {
  __typename?: 'SnpAggs';
  ALSPAC_AC?: Maybe<AggregationItem>;
  ALSPAC_AF?: Maybe<AggregationItem>;
  ALSPAC_AN?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_Closest_gene?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_Effect?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_Exon_Rank?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_GO_biological_process_complete_list_id?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_GO_cellular_component_complete_list_id?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_GO_molecular_function_complete_list_id?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_Gene_ID?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_HGVSc?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_HGVSp?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_PANTHER_pathway_list_id?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_PANTHER_protein_class_list_id?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_REACTOME_pathway_list_id?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_Transcript_ID?: Maybe<AggregationItem>;
  ANNOVAR_ensembl_summary?: Maybe<AggregationItem>;
  ANNOVAR_refseq_Closest_gene?: Maybe<AggregationItem>;
  ANNOVAR_refseq_Effect?: Maybe<AggregationItem>;
  ANNOVAR_refseq_Exon_Rank?: Maybe<AggregationItem>;
  ANNOVAR_refseq_GO_biological_process_complete_list_id?: Maybe<AggregationItem>;
  ANNOVAR_refseq_GO_cellular_component_complete_list_id?: Maybe<AggregationItem>;
  ANNOVAR_refseq_GO_molecular_function_complete_list_id?: Maybe<AggregationItem>;
  ANNOVAR_refseq_Gene_ID?: Maybe<AggregationItem>;
  ANNOVAR_refseq_HGVSc?: Maybe<AggregationItem>;
  ANNOVAR_refseq_HGVSp?: Maybe<AggregationItem>;
  ANNOVAR_refseq_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<AggregationItem>;
  ANNOVAR_refseq_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<AggregationItem>;
  ANNOVAR_refseq_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<AggregationItem>;
  ANNOVAR_refseq_PANTHER_pathway_list_id?: Maybe<AggregationItem>;
  ANNOVAR_refseq_PANTHER_protein_class_list_id?: Maybe<AggregationItem>;
  ANNOVAR_refseq_REACTOME_pathway_list_id?: Maybe<AggregationItem>;
  ANNOVAR_refseq_Transcript_ID?: Maybe<AggregationItem>;
  ANNOVAR_refseq_summary?: Maybe<AggregationItem>;
  ANNOVAR_ucsc_Closest_gene?: Maybe<AggregationItem>;
  ANNOVAR_ucsc_Effect?: Maybe<AggregationItem>;
  ANNOVAR_ucsc_Exon_Rank?: Maybe<AggregationItem>;
  ANNOVAR_ucsc_Gene_ID?: Maybe<AggregationItem>;
  ANNOVAR_ucsc_HGVSc?: Maybe<AggregationItem>;
  ANNOVAR_ucsc_HGVSp?: Maybe<AggregationItem>;
  ANNOVAR_ucsc_Transcript_ID?: Maybe<AggregationItem>;
  ANNOVAR_ucsc_summary?: Maybe<AggregationItem>;
  APPRIS?: Maybe<AggregationItem>;
  Aloft_Confidence?: Maybe<AggregationItem>;
  Aloft_Fraction_transcripts_affected?: Maybe<AggregationItem>;
  Aloft_pred?: Maybe<AggregationItem>;
  Aloft_prob_Dominant?: Maybe<AggregationItem>;
  Aloft_prob_Recessive?: Maybe<AggregationItem>;
  Aloft_prob_Tolerant?: Maybe<AggregationItem>;
  CADD_phred?: Maybe<AggregationItem>;
  CADD_raw?: Maybe<AggregationItem>;
  CADD_raw_rankscore?: Maybe<AggregationItem>;
  COSMIC_CNT?: Maybe<AggregationItem>;
  COSMIC_ID?: Maybe<AggregationItem>;
  DEOGEN2_pred?: Maybe<AggregationItem>;
  DEOGEN2_rankscore?: Maybe<AggregationItem>;
  DEOGEN2_score?: Maybe<AggregationItem>;
  ENCODE_Dnase_cells?: Maybe<AggregationItem>;
  ENCODE_Dnase_score?: Maybe<AggregationItem>;
  ENCODE_TFBS?: Maybe<AggregationItem>;
  ENCODE_TFBS_cells?: Maybe<AggregationItem>;
  ENCODE_TFBS_score?: Maybe<AggregationItem>;
  ENCODE_annotated?: Maybe<AggregationItem>;
  ESP6500_AA_AC?: Maybe<AggregationItem>;
  ESP6500_AA_AF?: Maybe<AggregationItem>;
  ESP6500_AC?: Maybe<AggregationItem>;
  ESP6500_AF?: Maybe<AggregationItem>;
  ESP6500_EA_AC?: Maybe<AggregationItem>;
  ESP6500_EA_AF?: Maybe<AggregationItem>;
  Ensembl_Regulatory_Build_ID?: Maybe<AggregationItem>;
  Ensembl_Regulatory_Build_TFBS?: Maybe<AggregationItem>;
  Ensembl_Regulatory_Build_TFBS_matrix?: Maybe<AggregationItem>;
  Ensembl_Regulatory_Build_feature_type?: Maybe<AggregationItem>;
  Ensembl_geneid?: Maybe<AggregationItem>;
  Ensembl_mapped_to_0_flanking_region?: Maybe<AggregationItem>;
  Ensembl_mapped_to_10000_flanking_region?: Maybe<AggregationItem>;
  Ensembl_mapped_to_20000_flanking_region?: Maybe<AggregationItem>;
  Ensembl_mapped_to_ANNOVAR_refseq_Gene_ID?: Maybe<AggregationItem>;
  Ensembl_mapped_to_SnpEff_refseq_Gene_ID?: Maybe<AggregationItem>;
  Ensembl_mapped_to_VEP_refseq_Gene_ID?: Maybe<AggregationItem>;
  Ensembl_proteinid?: Maybe<AggregationItem>;
  Ensembl_transcriptid?: Maybe<AggregationItem>;
  ExAC_AC?: Maybe<AggregationItem>;
  ExAC_AF?: Maybe<AggregationItem>;
  ExAC_AFR_AC?: Maybe<AggregationItem>;
  ExAC_AFR_AF?: Maybe<AggregationItem>;
  ExAC_AMR_AC?: Maybe<AggregationItem>;
  ExAC_AMR_AF?: Maybe<AggregationItem>;
  ExAC_Adj_AC?: Maybe<AggregationItem>;
  ExAC_Adj_AF?: Maybe<AggregationItem>;
  ExAC_EAS_AC?: Maybe<AggregationItem>;
  ExAC_EAS_AF?: Maybe<AggregationItem>;
  ExAC_FIN_AC?: Maybe<AggregationItem>;
  ExAC_FIN_AF?: Maybe<AggregationItem>;
  ExAC_NFE_AC?: Maybe<AggregationItem>;
  ExAC_NFE_AF?: Maybe<AggregationItem>;
  ExAC_SAS_AC?: Maybe<AggregationItem>;
  ExAC_SAS_AF?: Maybe<AggregationItem>;
  FANTOM5_CAGE_peak_permissive?: Maybe<AggregationItem>;
  FANTOM5_CAGE_peak_robust?: Maybe<AggregationItem>;
  FANTOM5_enhancer_differentially_expressed_tissue_cell?: Maybe<AggregationItem>;
  FANTOM5_enhancer_expressed_tissue_cell?: Maybe<AggregationItem>;
  FANTOM5_enhancer_permissive?: Maybe<AggregationItem>;
  FANTOM5_enhancer_robust?: Maybe<AggregationItem>;
  FANTOM5_enhancer_target?: Maybe<AggregationItem>;
  FATHMM_converted_rankscore?: Maybe<AggregationItem>;
  FATHMM_pred?: Maybe<AggregationItem>;
  FATHMM_score?: Maybe<AggregationItem>;
  GENCODE_basic?: Maybe<AggregationItem>;
  GERP_NR?: Maybe<AggregationItem>;
  GERP_RS?: Maybe<AggregationItem>;
  GERP_RS_rankscore?: Maybe<AggregationItem>;
  GRASP_PMID?: Maybe<AggregationItem>;
  GRASP_ancestry?: Maybe<AggregationItem>;
  GRASP_p_value?: Maybe<AggregationItem>;
  GRASP_phenotype?: Maybe<AggregationItem>;
  GRASP_platform?: Maybe<AggregationItem>;
  GRASP_rs?: Maybe<AggregationItem>;
  GTEx_V7_gene?: Maybe<AggregationItem>;
  GTEx_V7_tissue?: Maybe<AggregationItem>;
  GWAS_catalog_OR?: Maybe<AggregationItem>;
  GWAS_catalog_pubmedid?: Maybe<AggregationItem>;
  GWAS_catalog_rs?: Maybe<AggregationItem>;
  GWAS_catalog_trait?: Maybe<AggregationItem>;
  LRT_Omega?: Maybe<AggregationItem>;
  LRT_converted_rankscore?: Maybe<AggregationItem>;
  LRT_pred?: Maybe<AggregationItem>;
  LRT_score?: Maybe<AggregationItem>;
  MPC_rankscore?: Maybe<AggregationItem>;
  MPC_score?: Maybe<AggregationItem>;
  MVP_rankscore?: Maybe<AggregationItem>;
  MVP_score?: Maybe<AggregationItem>;
  M_CAP_pred?: Maybe<AggregationItem>;
  M_CAP_rankscore?: Maybe<AggregationItem>;
  M_CAP_score?: Maybe<AggregationItem>;
  MetaLR_pred?: Maybe<AggregationItem>;
  MetaLR_rankscore?: Maybe<AggregationItem>;
  MetaLR_score?: Maybe<AggregationItem>;
  MetaSVM_pred?: Maybe<AggregationItem>;
  MetaSVM_rankscore?: Maybe<AggregationItem>;
  MetaSVM_score?: Maybe<AggregationItem>;
  Motif_breaking?: Maybe<AggregationItem>;
  MutPred_AAchange?: Maybe<AggregationItem>;
  MutPred_Top5features?: Maybe<AggregationItem>;
  MutPred_protID?: Maybe<AggregationItem>;
  MutPred_rankscore?: Maybe<AggregationItem>;
  MutPred_score?: Maybe<AggregationItem>;
  MutationAssessor_pred?: Maybe<AggregationItem>;
  MutationAssessor_rankscore?: Maybe<AggregationItem>;
  MutationAssessor_score?: Maybe<AggregationItem>;
  MutationTaster_AAE?: Maybe<AggregationItem>;
  MutationTaster_converted_rankscore?: Maybe<AggregationItem>;
  MutationTaster_model?: Maybe<AggregationItem>;
  MutationTaster_pred?: Maybe<AggregationItem>;
  MutationTaster_score?: Maybe<AggregationItem>;
  ORegAnno_PMID?: Maybe<AggregationItem>;
  ORegAnno_type?: Maybe<AggregationItem>;
  PROVEAN_converted_rankscore?: Maybe<AggregationItem>;
  PROVEAN_pred?: Maybe<AggregationItem>;
  PROVEAN_score?: Maybe<AggregationItem>;
  PrimateAI_pred?: Maybe<AggregationItem>;
  PrimateAI_rankscore?: Maybe<AggregationItem>;
  PrimateAI_score?: Maybe<AggregationItem>;
  RegulomeDB_motif?: Maybe<AggregationItem>;
  RegulomeDB_score?: Maybe<AggregationItem>;
  Reliability_index?: Maybe<AggregationItem>;
  SIFT4G_converted_rankscore?: Maybe<AggregationItem>;
  SIFT4G_pred?: Maybe<AggregationItem>;
  SIFT4G_score?: Maybe<AggregationItem>;
  SIFT_converted_rankscore?: Maybe<AggregationItem>;
  SIFT_pred?: Maybe<AggregationItem>;
  SIFT_score?: Maybe<AggregationItem>;
  SnpEff_ensembl_CDS_position_CDS_len?: Maybe<AggregationItem>;
  SnpEff_ensembl_Distance_to_feature?: Maybe<AggregationItem>;
  SnpEff_ensembl_Effect?: Maybe<AggregationItem>;
  SnpEff_ensembl_Effect_impact?: Maybe<AggregationItem>;
  SnpEff_ensembl_Exon_or_intron_rank_total?: Maybe<AggregationItem>;
  SnpEff_ensembl_GO_biological_process_complete_list_id?: Maybe<AggregationItem>;
  SnpEff_ensembl_GO_cellular_component_complete_list_id?: Maybe<AggregationItem>;
  SnpEff_ensembl_GO_molecular_function_complete_list_id?: Maybe<AggregationItem>;
  SnpEff_ensembl_Gene_ID?: Maybe<AggregationItem>;
  SnpEff_ensembl_Gene_name?: Maybe<AggregationItem>;
  SnpEff_ensembl_HGVSc?: Maybe<AggregationItem>;
  SnpEff_ensembl_HGVSp?: Maybe<AggregationItem>;
  SnpEff_ensembl_LOF_NMD?: Maybe<AggregationItem>;
  SnpEff_ensembl_LOF_NMD_gene_ID?: Maybe<AggregationItem>;
  SnpEff_ensembl_LOF_NMD_gene_name?: Maybe<AggregationItem>;
  SnpEff_ensembl_LOF_NMD_num_transcripts_affected?: Maybe<AggregationItem>;
  SnpEff_ensembl_LOF_NMD_percent_transcripts_affected?: Maybe<AggregationItem>;
  SnpEff_ensembl_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<AggregationItem>;
  SnpEff_ensembl_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<AggregationItem>;
  SnpEff_ensembl_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<AggregationItem>;
  SnpEff_ensembl_PANTHER_pathway_list_id?: Maybe<AggregationItem>;
  SnpEff_ensembl_PANTHER_protein_class_list_id?: Maybe<AggregationItem>;
  SnpEff_ensembl_Protein_position_Protein_len?: Maybe<AggregationItem>;
  SnpEff_ensembl_REACTOME_pathway_list_id?: Maybe<AggregationItem>;
  SnpEff_ensembl_Sequence_feature?: Maybe<AggregationItem>;
  SnpEff_ensembl_Sequence_feature_impact?: Maybe<AggregationItem>;
  SnpEff_ensembl_TF_ID?: Maybe<AggregationItem>;
  SnpEff_ensembl_TF_binding_effect?: Maybe<AggregationItem>;
  SnpEff_ensembl_TF_name?: Maybe<AggregationItem>;
  SnpEff_ensembl_Transcript_ID?: Maybe<AggregationItem>;
  SnpEff_ensembl_Transcript_biotype?: Maybe<AggregationItem>;
  SnpEff_ensembl_Warnings?: Maybe<AggregationItem>;
  SnpEff_ensembl_cDNA_position_cDNA_len?: Maybe<AggregationItem>;
  SnpEff_ensembl_summary?: Maybe<AggregationItem>;
  SnpEff_refseq_CDS_position_CDS_len?: Maybe<AggregationItem>;
  SnpEff_refseq_Distance_to_feature?: Maybe<AggregationItem>;
  SnpEff_refseq_Effect?: Maybe<AggregationItem>;
  SnpEff_refseq_Effect_impact?: Maybe<AggregationItem>;
  SnpEff_refseq_Exon_or_intron_rank_total?: Maybe<AggregationItem>;
  SnpEff_refseq_GO_biological_process_complete_list_id?: Maybe<AggregationItem>;
  SnpEff_refseq_GO_cellular_component_complete_list_id?: Maybe<AggregationItem>;
  SnpEff_refseq_GO_molecular_function_complete_list_id?: Maybe<AggregationItem>;
  SnpEff_refseq_Gene_ID?: Maybe<AggregationItem>;
  SnpEff_refseq_Gene_name?: Maybe<AggregationItem>;
  SnpEff_refseq_HGVSc?: Maybe<AggregationItem>;
  SnpEff_refseq_HGVSp?: Maybe<AggregationItem>;
  SnpEff_refseq_LOF_NMD?: Maybe<AggregationItem>;
  SnpEff_refseq_LOF_NMD_gene_ID?: Maybe<AggregationItem>;
  SnpEff_refseq_LOF_NMD_gene_name?: Maybe<AggregationItem>;
  SnpEff_refseq_LOF_NMD_num_transcripts_affected?: Maybe<AggregationItem>;
  SnpEff_refseq_LOF_NMD_percent_transcripts_affected?: Maybe<AggregationItem>;
  SnpEff_refseq_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<AggregationItem>;
  SnpEff_refseq_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<AggregationItem>;
  SnpEff_refseq_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<AggregationItem>;
  SnpEff_refseq_PANTHER_pathway_list_id?: Maybe<AggregationItem>;
  SnpEff_refseq_PANTHER_protein_class_list_id?: Maybe<AggregationItem>;
  SnpEff_refseq_Protein_position_Protein_len?: Maybe<AggregationItem>;
  SnpEff_refseq_REACTOME_pathway_list_id?: Maybe<AggregationItem>;
  SnpEff_refseq_Sequence_feature?: Maybe<AggregationItem>;
  SnpEff_refseq_Sequence_feature_impact?: Maybe<AggregationItem>;
  SnpEff_refseq_Transcript_ID?: Maybe<AggregationItem>;
  SnpEff_refseq_Transcript_biotype?: Maybe<AggregationItem>;
  SnpEff_refseq_Warnings?: Maybe<AggregationItem>;
  SnpEff_refseq_cDNA_position_cDNA_len?: Maybe<AggregationItem>;
  SnpEff_refseq_summary?: Maybe<AggregationItem>;
  TSL?: Maybe<AggregationItem>;
  TWINSUK_AC?: Maybe<AggregationItem>;
  TWINSUK_AF?: Maybe<AggregationItem>;
  TWINSUK_AN?: Maybe<AggregationItem>;
  TargetScan_context_score_percentile?: Maybe<AggregationItem>;
  UK10K_AC?: Maybe<AggregationItem>;
  UK10K_AF?: Maybe<AggregationItem>;
  UK10K_AN?: Maybe<AggregationItem>;
  UTR3_miRNA_target?: Maybe<AggregationItem>;
  Uniprot_acc?: Maybe<AggregationItem>;
  Uniprot_entry?: Maybe<AggregationItem>;
  Uniprot_mapped_to_0_flanking_region?: Maybe<AggregationItem>;
  Uniprot_mapped_to_10000_flanking_region?: Maybe<AggregationItem>;
  Uniprot_mapped_to_20000_flanking_region?: Maybe<AggregationItem>;
  Uniprot_mapped_to_ANNOVAR_ensembl_Gene_ID?: Maybe<AggregationItem>;
  Uniprot_mapped_to_ANNOVAR_refseq_Gene_ID?: Maybe<AggregationItem>;
  Uniprot_mapped_to_SnpEff_ensembl_Gene_ID?: Maybe<AggregationItem>;
  Uniprot_mapped_to_SnpEff_refseq_Gene_ID?: Maybe<AggregationItem>;
  Uniprot_mapped_to_VEP_ensembl_Gene_ID?: Maybe<AggregationItem>;
  Uniprot_mapped_to_VEP_refseq_Gene_ID?: Maybe<AggregationItem>;
  VEP_canonical?: Maybe<AggregationItem>;
  VEP_ensembl_Amino_Acid_Change?: Maybe<AggregationItem>;
  VEP_ensembl_CANONICAL?: Maybe<AggregationItem>;
  VEP_ensembl_CCDS?: Maybe<AggregationItem>;
  VEP_ensembl_CDS_position?: Maybe<AggregationItem>;
  VEP_ensembl_Codon_Change_or_Distance?: Maybe<AggregationItem>;
  VEP_ensembl_Consequence?: Maybe<AggregationItem>;
  VEP_ensembl_Exon_or_Intron_Rank?: Maybe<AggregationItem>;
  VEP_ensembl_GO_biological_process_complete_list_id?: Maybe<AggregationItem>;
  VEP_ensembl_GO_cellular_component_complete_list_id?: Maybe<AggregationItem>;
  VEP_ensembl_GO_molecular_function_complete_list_id?: Maybe<AggregationItem>;
  VEP_ensembl_Gene_ID?: Maybe<AggregationItem>;
  VEP_ensembl_Gene_Name?: Maybe<AggregationItem>;
  VEP_ensembl_HGVSc?: Maybe<AggregationItem>;
  VEP_ensembl_HGVSp?: Maybe<AggregationItem>;
  VEP_ensembl_LoF?: Maybe<AggregationItem>;
  VEP_ensembl_LoF_filter?: Maybe<AggregationItem>;
  VEP_ensembl_LoF_flags?: Maybe<AggregationItem>;
  VEP_ensembl_LoF_info?: Maybe<AggregationItem>;
  VEP_ensembl_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<AggregationItem>;
  VEP_ensembl_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<AggregationItem>;
  VEP_ensembl_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<AggregationItem>;
  VEP_ensembl_PANTHER_pathway_list_id?: Maybe<AggregationItem>;
  VEP_ensembl_PANTHER_protein_class_list_id?: Maybe<AggregationItem>;
  VEP_ensembl_Protein_ID?: Maybe<AggregationItem>;
  VEP_ensembl_Protein_position?: Maybe<AggregationItem>;
  VEP_ensembl_REACTOME_pathway_list_id?: Maybe<AggregationItem>;
  VEP_ensembl_STRAND?: Maybe<AggregationItem>;
  VEP_ensembl_SWISSPROT?: Maybe<AggregationItem>;
  VEP_ensembl_Transcript_ID?: Maybe<AggregationItem>;
  VEP_ensembl_cDNA_position?: Maybe<AggregationItem>;
  VEP_ensembl_summary?: Maybe<AggregationItem>;
  VEP_refseq_Amino_Acid_Change?: Maybe<AggregationItem>;
  VEP_refseq_CANONICAL?: Maybe<AggregationItem>;
  VEP_refseq_CDS_position?: Maybe<AggregationItem>;
  VEP_refseq_Codon_Change_or_Distance?: Maybe<AggregationItem>;
  VEP_refseq_Consequence?: Maybe<AggregationItem>;
  VEP_refseq_Exon_or_Intron_Rank?: Maybe<AggregationItem>;
  VEP_refseq_GO_biological_process_complete_list_id?: Maybe<AggregationItem>;
  VEP_refseq_GO_cellular_component_complete_list_id?: Maybe<AggregationItem>;
  VEP_refseq_GO_molecular_function_complete_list_id?: Maybe<AggregationItem>;
  VEP_refseq_Gene_ID?: Maybe<AggregationItem>;
  VEP_refseq_Gene_Name?: Maybe<AggregationItem>;
  VEP_refseq_HGVSc?: Maybe<AggregationItem>;
  VEP_refseq_HGVSp?: Maybe<AggregationItem>;
  VEP_refseq_LoF?: Maybe<AggregationItem>;
  VEP_refseq_LoF_filter?: Maybe<AggregationItem>;
  VEP_refseq_LoF_flags?: Maybe<AggregationItem>;
  VEP_refseq_LoF_info?: Maybe<AggregationItem>;
  VEP_refseq_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<AggregationItem>;
  VEP_refseq_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<AggregationItem>;
  VEP_refseq_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<AggregationItem>;
  VEP_refseq_PANTHER_pathway_list_id?: Maybe<AggregationItem>;
  VEP_refseq_PANTHER_protein_class_list_id?: Maybe<AggregationItem>;
  VEP_refseq_Protein_ID?: Maybe<AggregationItem>;
  VEP_refseq_Protein_position?: Maybe<AggregationItem>;
  VEP_refseq_REACTOME_pathway_list_id?: Maybe<AggregationItem>;
  VEP_refseq_STRAND?: Maybe<AggregationItem>;
  VEP_refseq_Transcript_ID?: Maybe<AggregationItem>;
  VEP_refseq_cDNA_position?: Maybe<AggregationItem>;
  VEP_refseq_summary?: Maybe<AggregationItem>;
  _1000Gp3_AC?: Maybe<AggregationItem>;
  _1000Gp3_AF?: Maybe<AggregationItem>;
  _1000Gp3_AFR_AC?: Maybe<AggregationItem>;
  _1000Gp3_AFR_AF?: Maybe<AggregationItem>;
  _1000Gp3_AMR_AC?: Maybe<AggregationItem>;
  _1000Gp3_AMR_AF?: Maybe<AggregationItem>;
  _1000Gp3_EAS_AC?: Maybe<AggregationItem>;
  _1000Gp3_EAS_AF?: Maybe<AggregationItem>;
  _1000Gp3_EUR_AC?: Maybe<AggregationItem>;
  _1000Gp3_EUR_AF?: Maybe<AggregationItem>;
  _1000Gp3_SAS_AC?: Maybe<AggregationItem>;
  _1000Gp3_SAS_AF?: Maybe<AggregationItem>;
  aaalt?: Maybe<AggregationItem>;
  aapos?: Maybe<AggregationItem>;
  aaref?: Maybe<AggregationItem>;
  alt?: Maybe<AggregationItem>;
  cds_strand?: Maybe<AggregationItem>;
  chr?: Maybe<AggregationItem>;
  clinvar_MedGen_id?: Maybe<AggregationItem>;
  clinvar_OMIM_id?: Maybe<AggregationItem>;
  clinvar_Orphanet_id?: Maybe<AggregationItem>;
  clinvar_clnsig?: Maybe<AggregationItem>;
  clinvar_hgvs?: Maybe<AggregationItem>;
  clinvar_id?: Maybe<AggregationItem>;
  clinvar_review?: Maybe<AggregationItem>;
  clinvar_trait?: Maybe<AggregationItem>;
  clinvar_var_source?: Maybe<AggregationItem>;
  codon_degeneracy?: Maybe<AggregationItem>;
  codonpos?: Maybe<AggregationItem>;
  enhancer_linked_GO_biological_process_complete_list_id?: Maybe<AggregationItem>;
  enhancer_linked_GO_cellular_component_complete_list_id?: Maybe<AggregationItem>;
  enhancer_linked_GO_molecular_function_complete_list_id?: Maybe<AggregationItem>;
  enhancer_linked_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<AggregationItem>;
  enhancer_linked_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<AggregationItem>;
  enhancer_linked_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<AggregationItem>;
  enhancer_linked_PANTHER_pathway_list_id?: Maybe<AggregationItem>;
  enhancer_linked_PANTHER_protein_class_list_id?: Maybe<AggregationItem>;
  enhancer_linked_REACTOME_pathway_list_id?: Maybe<AggregationItem>;
  enhancer_linked_assay?: Maybe<AggregationItem>;
  enhancer_linked_enhancer?: Maybe<AggregationItem>;
  enhancer_linked_genes?: Maybe<AggregationItem>;
  fathmm_MKL_coding_group?: Maybe<AggregationItem>;
  fathmm_MKL_coding_pred?: Maybe<AggregationItem>;
  fathmm_MKL_coding_rankscore?: Maybe<AggregationItem>;
  fathmm_MKL_coding_score?: Maybe<AggregationItem>;
  fathmm_MKL_non_coding_group?: Maybe<AggregationItem>;
  fathmm_MKL_non_coding_pred?: Maybe<AggregationItem>;
  fathmm_MKL_non_coding_rankscore?: Maybe<AggregationItem>;
  fathmm_MKL_non_coding_score?: Maybe<AggregationItem>;
  fathmm_XF_coding_or_noncoding?: Maybe<AggregationItem>;
  fathmm_XF_pred?: Maybe<AggregationItem>;
  fathmm_XF_rankscore?: Maybe<AggregationItem>;
  fathmm_XF_score?: Maybe<AggregationItem>;
  flanking_0_GO_biological_process_complete_list_id?: Maybe<AggregationItem>;
  flanking_0_GO_cellular_component_complete_list_id?: Maybe<AggregationItem>;
  flanking_0_GO_molecular_function_complete_list_id?: Maybe<AggregationItem>;
  flanking_0_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<AggregationItem>;
  flanking_0_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<AggregationItem>;
  flanking_0_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<AggregationItem>;
  flanking_0_PANTHER_pathway_list_id?: Maybe<AggregationItem>;
  flanking_0_PANTHER_protein_class_list_id?: Maybe<AggregationItem>;
  flanking_0_REACTOME_pathway_list_id?: Maybe<AggregationItem>;
  flanking_10000_GO_biological_process_complete_list_id?: Maybe<AggregationItem>;
  flanking_10000_GO_cellular_component_complete_list_id?: Maybe<AggregationItem>;
  flanking_10000_GO_molecular_function_complete_list_id?: Maybe<AggregationItem>;
  flanking_10000_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<AggregationItem>;
  flanking_10000_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<AggregationItem>;
  flanking_10000_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<AggregationItem>;
  flanking_10000_PANTHER_pathway_list_id?: Maybe<AggregationItem>;
  flanking_10000_PANTHER_protein_class_list_id?: Maybe<AggregationItem>;
  flanking_10000_REACTOME_pathway_list_id?: Maybe<AggregationItem>;
  flanking_20000_GO_biological_process_complete_list_id?: Maybe<AggregationItem>;
  flanking_20000_GO_cellular_component_complete_list_id?: Maybe<AggregationItem>;
  flanking_20000_GO_molecular_function_complete_list_id?: Maybe<AggregationItem>;
  flanking_20000_PANTHER_GO_SLIM_biological_process_list_id?: Maybe<AggregationItem>;
  flanking_20000_PANTHER_GO_SLIM_cellular_component_list_id?: Maybe<AggregationItem>;
  flanking_20000_PANTHER_GO_SLIM_molecular_function_list_id?: Maybe<AggregationItem>;
  flanking_20000_PANTHER_pathway_list_id?: Maybe<AggregationItem>;
  flanking_20000_PANTHER_protein_class_list_id?: Maybe<AggregationItem>;
  flanking_20000_REACTOME_pathway_list_id?: Maybe<AggregationItem>;
  funseq_noncoding_score?: Maybe<AggregationItem>;
  genename?: Maybe<AggregationItem>;
  gnomAD_exomes_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_AFR_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_AFR_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_AFR_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_AFR_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_AMR_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_AMR_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_AMR_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_AMR_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_ASJ_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_ASJ_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_ASJ_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_ASJ_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_EAS_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_EAS_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_EAS_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_EAS_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_FIN_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_FIN_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_FIN_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_FIN_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_NFE_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_NFE_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_NFE_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_NFE_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_POPMAX_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_POPMAX_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_POPMAX_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_POPMAX_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_SAS_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_SAS_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_SAS_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_SAS_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_AFR_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_AFR_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_AFR_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_AFR_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_AMR_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_AMR_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_AMR_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_AMR_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_ASJ_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_ASJ_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_ASJ_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_ASJ_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_EAS_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_EAS_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_EAS_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_EAS_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_FIN_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_FIN_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_FIN_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_FIN_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_NFE_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_NFE_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_NFE_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_NFE_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_POPMAX_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_POPMAX_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_POPMAX_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_POPMAX_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_SAS_AC?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_SAS_AF?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_SAS_AN?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_SAS_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_controls_nhomalt?: Maybe<AggregationItem>;
  gnomAD_exomes_flag?: Maybe<AggregationItem>;
  gnomAD_exomes_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_AFR_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_AFR_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_AFR_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_AFR_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_AMR_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_AMR_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_AMR_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_AMR_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_ASJ_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_ASJ_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_ASJ_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_ASJ_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_EAS_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_EAS_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_EAS_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_EAS_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_FIN_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_FIN_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_FIN_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_FIN_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_NFE_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_NFE_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_NFE_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_NFE_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_POPMAX_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_POPMAX_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_POPMAX_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_POPMAX_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_AFR_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_AFR_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_AFR_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_AFR_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_AMR_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_AMR_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_AMR_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_AMR_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_ASJ_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_ASJ_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_ASJ_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_ASJ_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_EAS_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_EAS_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_EAS_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_EAS_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_FIN_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_FIN_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_FIN_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_FIN_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_NFE_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_NFE_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_NFE_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_NFE_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_POPMAX_AC?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_POPMAX_AF?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_POPMAX_AN?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_POPMAX_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_controls_nhomalt?: Maybe<AggregationItem>;
  gnomAD_genomes_flag?: Maybe<AggregationItem>;
  gnomAD_genomes_nhomalt?: Maybe<AggregationItem>;
  network_hub?: Maybe<AggregationItem>;
  pos?: Maybe<AggregationItem>;
  ref?: Maybe<AggregationItem>;
  refcodon?: Maybe<AggregationItem>;
  rs_dbSNP151?: Maybe<AggregationItem>;
  sensitive?: Maybe<AggregationItem>;
  sno_miRNA_name?: Maybe<AggregationItem>;
  sno_miRNA_type?: Maybe<AggregationItem>;
  splicing_consensus_ada_score?: Maybe<AggregationItem>;
  splicing_consensus_rf_score?: Maybe<AggregationItem>;
  target_gene?: Maybe<AggregationItem>;
  ultra_sensitive?: Maybe<AggregationItem>;
};
