export class Page {
    size = 0;
    total = 0;
    pageNumber = 0;
}

export class SnpPage extends Page {
    query;
    source: string[];
    snps: any;
    gene;
    vcfUrl: string;
}
