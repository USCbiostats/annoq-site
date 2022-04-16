import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[annoqWidgetToggle]'
})
export class AnnoqWidgetToggleDirective {
    constructor(public el: ElementRef) {
    }
}
