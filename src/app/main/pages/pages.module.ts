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
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    AnnoqSharedModule,
    AnnoqFooterModule,
    AnnoqConfirmDialogModule,
    AppsModule
  ],
  providers: [
  ]
})

export class PagesModule {
}
