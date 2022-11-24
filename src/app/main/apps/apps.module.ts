import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TreeModule } from '@circlon/angular-tree-component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SnpTableComponent } from './snp/snp-table/snp-table.component';
import { AnnotationTreeComponent } from './annotation/annotation-tree/annotation-tree.component';
import { AnnotationComponent } from './annotation/annotation.component';
import { DownloadReadyComponent } from './snp/snp-table/download-ready/download-ready.component';
import { SnpDetailComponent } from './snp/snp-detail/snp-detail.component';
import { AnnotationDetailDialogComponent } from './annotation/dialogs/annotation-detail/annotation-detail.component';
import { SnpSummaryComponent } from './snp/snp-summary/snp-summary.component';
import { GeneralStatsComponent } from './snp/snp-stats/general-stats/general-stats.component';
import { SnpStatsComponent } from './snp/snp-stats/snp-stats.component';
import { AnnoqSharedModule } from '@annoq/shared.module';
import { AnnoqConfirmDialogModule } from '@annoq/components/confirm-dialog/confirm-dialog.module';
import { PositionStatsComponent } from './snp/snp-stats/position-stats/position-stats.component';
import { SearchFormComponent } from './snp/search-form/search-form.component';
import { AnnotationFiltersComponent } from './snp/annotation-filters/annotation-filters.component';

const routes = [];

@NgModule({
    declarations: [
        SnpTableComponent,
        AnnotationComponent,
        AnnotationTreeComponent,
        DownloadReadyComponent,
        SnpDetailComponent,
        AnnotationDetailDialogComponent,
        SnpSummaryComponent,
        SnpStatsComponent,
        GeneralStatsComponent,
        PositionStatsComponent,
        SearchFormComponent,
        AnnotationFiltersComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        TranslateModule,
        TreeModule,
        NgxChartsModule,
        AnnoqSharedModule,
        AnnoqConfirmDialogModule,
    ],
    exports: [
        SnpTableComponent,
        SnpDetailComponent,
        AnnotationComponent,
        AnnotationTreeComponent,
        AnnotationDetailDialogComponent,
        SnpSummaryComponent,
        SnpStatsComponent,
        GeneralStatsComponent,
        PositionStatsComponent,
        SearchFormComponent,
        AnnotationFiltersComponent
    ],
    providers: []
})

export class AppsModule {
}
