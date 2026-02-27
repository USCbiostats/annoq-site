import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AnnoqSharedModule } from '@annoq/shared.module';
import { AppsModule } from './../apps/apps.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { AnnoqFooterModule } from 'app/layout/components/footer/footer.module';
import { PublicationComponent } from './publication/publication.component';
import { ContactComponent } from './contact/contact.component';
import { AnnoqConfirmDialogModule } from '@annoq/components/confirm-dialog/confirm-dialog.module';
import { CookiePolicyComponent } from './cookie-policy/cookie-policy.component';
import { VersionComponent } from './version/version.component';
import { ReleaseComponent } from './release/release.component';
import { DocsComponent } from './docs/docs.component';
import { MarkdownModule } from 'ngx-markdown';

const routes = [{
  path: '', component: HomeComponent
}, {
  path: 'search', component: SearchComponent
}, {
  path: 'contact', component: ContactComponent
}, {
  path: 'detail', component: DetailComponent
}, {
  path: 'about', component: AboutComponent
}, {
  path: 'cookie-policy', component: CookiePolicyComponent
}, {
  path: 'version', component: VersionComponent
}, {
  path: 'release', component: ReleaseComponent
}, {
  path: 'docs', component: DocsComponent
}, {
  path: 'docs/:section', component: DocsComponent
}, {
  path: 'docs/:section/:page', component: DocsComponent
}];

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    AboutComponent,
    DetailComponent,
    PublicationComponent,
    ContactComponent,
    CookiePolicyComponent,
    VersionComponent,
    ReleaseComponent,
    DocsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    AnnoqSharedModule,
    AnnoqFooterModule,
    AnnoqConfirmDialogModule,
    AppsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
  ]
})

export class PagesModule {
}
