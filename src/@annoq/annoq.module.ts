import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { ANNOQ_CONFIG, AnnoqConfigService } from './services/config.service';
import { AnnoqMatchMediaService } from './services/match-media.service';
import { AnnoqSplashScreenService } from './services/splash-screen.service';
import { AnnoqTranslationLoaderService } from './services/translation-loader.service';

@NgModule({
    entryComponents: [],
    providers: [
        AnnoqConfigService,
        AnnoqMatchMediaService,
        AnnoqSplashScreenService,
        AnnoqTranslationLoaderService
    ]
})
export class AnnoqModule {
    constructor(@Optional() @SkipSelf() parentModule: AnnoqModule) {
        if (parentModule) {
            throw new Error('AnnoqModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders<AnnoqModule> {
        return {
            ngModule: AnnoqModule,
            providers: [
                {
                    provide: ANNOQ_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
