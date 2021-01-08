import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { NoctuaSharedModule } from '@noctua/shared.module';
import { AppsModule } from './../apps/apps.module';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { NoctuaFooterModule } from 'app/layout/components/footer/footer.module';
import { UiTutorialComponent } from './tutorial/ui-tutorial/ui-tutorial.component';

const routes = [{
  path: '', component: HomeComponent
}, {
  path: 'search', component: SearchComponent
}, {
  path: 'ui-tutorial', component: UiTutorialComponent
}, {
  path: 'details', component: DetailComponent
}, {
  path: 'about', component: AboutComponent
}];

@NgModule({
  declarations: [
    HomeComponent,
    SearchComponent,
    AboutComponent,
    DetailComponent,
    UiTutorialComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    TranslateModule,
    NoctuaSharedModule,
    NoctuaFooterModule,
    AppsModule
  ],
  providers: [
  ]
})

export class PagesModule {
}
