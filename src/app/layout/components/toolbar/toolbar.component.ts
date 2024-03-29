import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

import { AnnoqConfigService } from '@annoq/services/config.service';
import { LayoutAnnoqComponent } from '../../layout-annoq/layout-annoq.component';

@Component({
    selector: 'annoq-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})

export class AnnoqToolbarComponent {
    userStatusOptions: any[];
    languages: any;
    selectedLanguage: any;
    showLoadingBar: boolean;
    horizontalNav: boolean;
    noNav: boolean;
    navigation: any;


    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private annoqConfig: AnnoqConfigService,
        private translate: TranslateService,
        private layoutAnnoqComponent: LayoutAnnoqComponent
    ) {
        this.languages = [{
            'id': 'en',
            'title': 'English',
            'flag': 'us'
        }, {
            'id': 'tr',
            'title': 'Turkish',
            'flag': 'tr'
        }];

        this.selectedLanguage = this.languages[0];

        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationStart) {
                    this.showLoadingBar = true;
                }
                if (event instanceof NavigationEnd) {
                    this.showLoadingBar = false;
                }
            });

    }

    search(value): void {
        console.log(value);
    }

    setLanguage(lang) {
        this.selectedLanguage = lang;
        this.translate.use(lang.id);
    }

    toggleSidenav() {
        this.layoutAnnoqComponent.toggleSidenav();
      }

}
