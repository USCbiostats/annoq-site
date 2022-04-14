import { NgModule } from '@angular/core';

import { LayoutAnnoqModule } from 'app/layout/layout-annoq/layout-annoq.module';


@NgModule({
    imports: [
        LayoutAnnoqModule
    ],
    exports: [
        LayoutAnnoqModule
    ]
})
export class LayoutModule {
}
