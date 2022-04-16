
export enum SearchFilterType {
    fields = 'fields',
};

export class SearchCriteria {
    fields: any[] = [];
    filtersCount = 0;

    constructor() {
    }

    updateFiltersCount() {
        const self = this;

        self.filtersCount = self.fields.length;
    }

    clearSearch() {
        this.fields = [];
    }


}