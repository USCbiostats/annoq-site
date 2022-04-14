export class Page {
    size = 0;
    total = 0;
    pageNumber = 0;
}

export class SnpPage extends Page {

    query;
    source: string[];
    snps: any;
    aggs: any;
    gene;
    vcfUrl: string;

    shallowRefresh() {
        this.pageNumber = 0;
        this.query = undefined;
        this.source = undefined;
        this.snps = undefined;
        this.aggs = undefined;
        this.gene = undefined;
        this.vcfUrl = undefined;
    }
}
