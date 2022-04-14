import { NgModule } from '@angular/core';

import { AnnoqWidgetComponent } from './widget.component';
import { AnnoqWidgetToggleDirective } from './widget-toggle.directive';

@NgModule({
    declarations: [
        AnnoqWidgetComponent,
        AnnoqWidgetToggleDirective
    ],
    exports: [
        AnnoqWidgetComponent,
        AnnoqWidgetToggleDirective
    ],
})
export class AnnoqWidgetModule {
}
