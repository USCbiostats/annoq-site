import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AnnoqPipesModule } from '../../pipes/pipes.module';
import { AnnoqMaterialColorPickerComponent } from './material-color-picker.component';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [
        AnnoqMaterialColorPickerComponent
    ],
    imports: [
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatRippleModule,
        AnnoqPipesModule
    ],
    exports: [
        AnnoqMaterialColorPickerComponent
    ],
})
export class AnnoqMaterialColorPickerModule {
}
