export class SnpAggs {
    field;
    query;
    source: string[];
    aggs: any;
}

export interface FrequencyBucket {
    key: string;
    doc_count: string;
}