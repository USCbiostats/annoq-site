import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AnnoqModule } from '@annoq/annoq.module';
import { AnnoqProgressBarModule } from '@annoq/components';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';

import { AnnoqSharedModule } from '@annoq/shared.module';
import { annoqConfig } from './annoq-config';
import { AppComponent } from './app.component';
import { LayoutModule } from 'app/layout/layout.module';

import { PagesModule } from './main/pages/pages.module';
import { AppsModule } from './main/apps/apps.module';

import {
    faPaw,
    faPen,
    faSitemap,
    faUser,
    faUsers,
    faCalendarDay,
    faCalendarWeek,
    faSearch,
    faTasks,
    faListAlt,
    faChevronRight,
    faHistory,
    faShoppingBasket,
    faCopy,
    faPlus,
    faLink,
    faChevronDown,
    faLevelDownAlt,
    faLevelUpAlt,
    faArrowUp,
    faArrowDown,
    faCaretDown,
    faCaretRight,
    faAngleDoubleDown,
    faAngleDoubleUp, faUndo, faSave, faExclamationTriangle, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faCode, faFileCode, faSearchPlus, faTable, faChartBar, faList, faBars, faFilter
} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { MatSidenavModule } from '@angular/material/sidenav';
import { environment } from 'environments/environment';

const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        RouterModule.forRoot(appRoutes),
        TranslateModule.forRoot(),
        ApolloModule,

        // Annoq Main and Shared modules
        AnnoqModule.forRoot(annoqConfig),
        AnnoqSharedModule,
        LayoutModule,
        RouterModule,
        MatSidenavModule,
        AnnoqProgressBarModule,

        //Annoq App
        PagesModule,
        AppsModule
    ],
    bootstrap: [
        AppComponent
    ],
    providers: [
        {
            // Setup Apollo for GraphQL
            // Used for API-V2
            provide: APOLLO_OPTIONS,
            useFactory(httpLink: HttpLink) {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: `${environment.annotationApiV2}/graphql`,
                    }),
                };
            },
            deps: [HttpLink],
        },
    ],
})
export class AppModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(
            faCode,
            faSearchPlus,
            faFileCode,
            faArrowUp,
            faArrowDown,
            faAngleDoubleLeft,
            faAngleDoubleRight,
            faAngleDoubleUp,
            faAngleDoubleDown,
            faAngleLeft,
            faAngleRight,
            faBars,
            faCalendarDay,
            faCalendarWeek,
            faCaretDown,
            faCaretRight,
            faChartBar,
            faChevronDown,
            faChevronRight,
            faCheckCircle,
            faCopy,
            faExclamationTriangle,
            faFilter,
            faFacebook,
            faGithub,
            faHistory,
            faLevelDownAlt,
            faLevelUpAlt,
            faLink,
            faList,
            faListAlt,
            faPaw,
            faPen,
            faPlus,
            faSave,
            faSearch,
            faShoppingBasket,
            faSitemap,
            faTable,
            faTasks,
            faTimesCircle,
            faTwitter,
            faUndo,
            faUser,
            faUsers,
        );
    }
}
