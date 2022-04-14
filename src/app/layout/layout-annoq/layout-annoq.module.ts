import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AnnoqSharedModule } from '@annoq/shared.module';

import { ContentModule } from 'app/layout/components/content/content.module';
import { AnnoqFooterModule } from 'app/layout/components/footer/footer.module';
import { QuickPanelModule } from 'app/layout/components/quick-panel/quick-panel.module';
import { AnnoqToolbarModule } from 'app/layout/components/toolbar/toolbar.module';

import { LayoutAnnoqComponent } from 'app/layout/layout-annoq/layout-annoq.component';

@NgModule({
    declarations: [
        LayoutAnnoqComponent
    ],
    imports: [
        RouterModule,
        AnnoqSharedModule,
        ContentModule,
        AnnoqFooterModule,
        QuickPanelModule,
        AnnoqToolbarModule
    ],
    exports: [
        LayoutAnnoqComponent
    ]
})
export class LayoutAnnoqModule {
}




