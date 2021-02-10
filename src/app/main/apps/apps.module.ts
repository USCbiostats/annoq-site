import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';
import { SnpTableComponent } from './snp/snp-table/snp-table.component';
import { AnnotationTreeComponent } from './annotation/annotation-tree/annotation-tree.component';
import { AnnotationComponent } from './annotation/annotation.component';
import { DownloadReadyComponent } from './snp/snp-table/download-ready/download-ready.component';
import { SnpDetailComponent } from './snp/snp-detail/snp-detail.component';
import { AnnotationDetailDialogComponent } from './annotation/dialogs/annotation-detail/annotation-detail.component';
import { NoctuaConfirmDialogModule } from '@noctua/components/confirm-dialog/confirm-dialog.module';

const routes = [];

@NgModule({
  declarations: [
    SnpTableComponent,
    AnnotationComponent,
    AnnotationTreeComponent,
    DownloadReadyComponent,
    SnpDetailComponent,
    AnnotationDetailDialogComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
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
