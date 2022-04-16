import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { AnnoqSharedModule } from '@annoq/shared.module';
import { AnnoqToolbarComponent } from './toolbar.component';

@NgModule({
    declarations: [
        AnnoqToolbarComponent
    ],
    imports: [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatToolbarModule,
        AnnoqSharedModule,
    ],
    exports: [
        AnnoqToolbarComponent
    ]
})

export class AnnoqToolbarModule {
}
