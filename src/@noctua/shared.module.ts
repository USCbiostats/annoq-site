import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NoctuaDirectivesModule } from './directives/directives';
import { NoctuaPipesModule } from './pipes/pipes.module';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        NoctuaDirectivesModule,
        NoctuaPipesModule,
        DragDropModule,
        FontAwesomeModule
    ],
    exports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        NoctuaDirectivesModule,
        NoctuaPipesModule,
        DragDropModule,
        FontAwesomeModule
    ]
})

export class NoctuaSharedModule { }
