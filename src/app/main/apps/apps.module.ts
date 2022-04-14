import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TreeModule } from '@circlon/angular-tree-component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NoctuaSharedModule } from '@noctua/shared.module';
import { SnpTableComponent } from './snp/snp-table/snp-table.component';
import { AnnotationTreeComponent } from './annotation/annotation-tree/annotation-tree.component';
import { AnnotationComponent } from './annotation/annotation.component';
import { DownloadReadyComponent } from './snp/snp-table/download-ready/download-ready.component';
import { SnpDetailComponent } from './snp/snp-detail/snp-detail.component';
import { AnnotationDetailDialogComponent } from './annotation/dialogs/annotation-detail/annotation-detail.component';
import { NoctuaConfirmDialogModule } from '@noctua/components/confirm-dialog/confirm-dialog.module';
import { SnpSummaryComponent } from './snp/snp-summary/snp-summary.component';
import { GeneralStatsComponent } from './snp/snp-stats/general-stats/general-stats.component';
import { SnpStatsComponent } from './snp/snp-stats/snp-stats.component';

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
    GeneralStatsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    TreeModule,
    NgxChartsModule,
    NoctuaSharedModule,
    NoctuaConfirmDialogModule,
  ],
  exports: [
    SnpTableComponent,
    SnpDetailComponent,
    AnnotationComponent,
    AnnotationTreeComponent,
    AnnotationDetailDialogComponent
  ],
  entryComponents: [
    DownloadReadyComponent,
    AnnotationDetailDialogComponent
  ],
  providers: [
  ]

})

export class AppsModule {
}
