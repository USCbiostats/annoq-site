import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from '@noctua.common/fakedb/services/fake-db.service';
import { NoctuaModule } from '@noctua/noctua.module';
import { NoctuaProgressBarModule } from '@noctua/components';

import { NoctuaSharedModule } from '@noctua/shared.module';
import { noctuaConfig } from './noctua-config';
import { AppComponent } from './app.component';
import { LayoutModule } from 'app/layout/layout.module';

import { PagesModule } from './main/pages/pages.module';
import { AppsModule } from './main/apps/apps.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgcCookieConsentModule, NgcCookieConsentConfig } from 'ngx-cookieconsent';

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
    faAngleDoubleUp, faUndo, faSave, faExclamationTriangle, faAngleDoubleLeft, faAngleDoubleRight, faAngleLeft, faAngleRight, faCode, faFileCode, faSearchPlus, faTable, faChartBar, faList
} from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

const appRoutes: Routes = [
    {
        path: '**',
        redirectTo: ''
    }
];

const cookieConfig: NgcCookieConsentConfig = {
    "cookie": {
        "domain": "http://annoq.org"
    },
    "position": "bottom-right",
    "theme": "classic",
    "palette": {
        "popup": {
            "background": "#ffffff",
            "border": "#000000",
            "text": "#000000",
            // "link": "#ffffff"
        },
        "button": {
            "background": "#f1d600",
            "text": "#000000",
            "border": "transparent"
        }
    },
    "type": "info",
    "content": {
        "message": "AnnoQ site uses cookies to ensure you get the best experience on our website.",
        "dismiss": "Got it!",
        "deny": "Refuse cookies",
        "link": "Learn more",
        "href": "https://cookiesandyou.com",
        "policy": "Cookie Policy"
    }
};

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
        NgcCookieConsentModule.forRoot(cookieConfig),

        // Noctua Main and Shared modules
        NoctuaModule.forRoot(noctuaConfig),
        InMemoryWebApiModule.forRoot(FakeDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),
        NoctuaSharedModule,
        LayoutModule,
        RouterModule,
        MatSidenavModule,
        NoctuaProgressBarModule,

        //Noctua App
        PagesModule,
        AppsModule
    ],
    bootstrap: [
        AppComponent
    ]
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
