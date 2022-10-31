import { Component, ElementRef, Inject, OnInit, OnDestroy, Renderer2, ViewEncapsulation } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AnnoqConfigService } from '@annoq/services/config.service';
import { TranslateService } from '@ngx-translate/core';
import { AnnoqSplashScreenService } from '@annoq/services/splash-screen.service';
import { AnnoqTranslationLoaderService } from '@annoq/services/translation-loader.service';


@Component({
    selector: 'annoq-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, OnDestroy {
    annoqConfig: any;
    navigation: any;

    private _unsubscribeAll: Subject<any>;


    constructor(
        private translate: TranslateService,
        private annoqSplashScreen: AnnoqSplashScreenService,
        private annoqTranslationLoader: AnnoqTranslationLoaderService,
        private _renderer: Renderer2,
        private _elementRef: ElementRef,
        private annoqConfigService: AnnoqConfigService,
        private platform: Platform,
        @Inject(DOCUMENT) private document: any
    ) {
        this.translate.addLangs(['en', 'tr']);
        this.translate.setDefaultLang('en');
        this.annoqTranslationLoader.loadTranslations();
        this.translate.use('en');

        if (this.platform.ANDROID || this.platform.IOS) {
            this.document.body.className += ' is-mobile';
        }

        this._unsubscribeAll = new Subject();

    }

    ngOnInit(): void {
        this.annoqConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.annoqConfig = config;
            });
    }

    ngOnDestroy() {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }


    addClass(className: string) {
        this._renderer.addClass(this._elementRef.nativeElement, className);
    }

    removeClass(className: string) {
        this._renderer.removeClass(this._elementRef.nativeElement, className);
    }
}
