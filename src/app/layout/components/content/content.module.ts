import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnnoqSharedModule } from '@annoq/shared.module';

import { ContentComponent } from 'app/layout/components/content/content.component';

@NgModule({
    declarations: [
        ContentComponent
    ],
    imports: [
        RouterModule,
        AnnoqSharedModule,
    ],
    exports: [
        ContentComponent
    ]
})
export class ContentModule {
}
