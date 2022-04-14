import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AnnoqSharedModule } from '@annoq/shared.module';

import { AnnoqFooterComponent } from 'app/layout/components/footer/footer.component';

@NgModule({
    declarations: [
        AnnoqFooterComponent
    ],
    imports: [
        RouterModule,
        AnnoqSharedModule
    ],
    exports: [
        AnnoqFooterComponent
    ]
})
export class AnnoqFooterModule {
}
