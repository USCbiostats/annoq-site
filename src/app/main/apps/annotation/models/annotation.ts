export interface Annotation {
    id: number;
    name: string;
    detail: string;
    label: string;
    link: string;
    pmid: string;
    parent_id: number;
    leaf: boolean;
    version: string;
    value_type: string;
    field_type: string;
    root_url: string;
    api_field?: string;
    keyword_searchable: boolean;
}

export class AnnotationNode {
    id: number;
    name: string;
    label: string;
    detail: string;
    link: string;
    pmid: string;
    parent_id: number;
    leaf: boolean;
    level: number;
    version: string;
    visible: boolean;
    expandable: boolean;
    api_field?: string;
    children: AnnotationNode[];
}

export class AnnotationFlatNode {
    label: string;
    detail: string;
    link: string;
    pmid: string;
    parent_id: number;
    leaf: boolean;
    visible: boolean;
    expandable: boolean;
    api_field?: string;
    level: number;
    version: string;
    constructor(
        public id: number,
        public name: string,
    ) { }

}
