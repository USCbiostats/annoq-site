export interface Annotation {
    id: number;
    name: string;
    detail: string;
    label: string;
    link: string;
    pmid: string;
    parent_id: number;
    leaf: boolean;
    value_type: string;
    field_type: string;
    root_url: string;
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
    visible: boolean;
    expandable: boolean;
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
    level: number;
    constructor(
        public id: number,
        public name: string,
    ) { }

}
