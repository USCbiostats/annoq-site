export interface Annotation {
    id: number;
    name: string;
    detail: string;
    parent_id: number;
    leaf: boolean;
}

export class AnnotationNode {
    id: number;
    name: string;
    detail: string;
    parent_id: number;
    leaf: boolean;
    level: number;
    visible: boolean;
    expandable: boolean;
    children: AnnotationNode[];
}

export class AnnotationFlatNode {
    constructor(
        public id: number,
        public name: string,
        public detail: string,
        public parent_id: number,
        public leaf: boolean,
        public visible: boolean,
        public expandable: boolean,
        public level: number) { }
}
