import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { NoctuaConfirmDialogComponent } from './confirm-dialog.component';

@NgModule({
    declarations: [
        NoctuaConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        NoctuaConfirmDialogComponent
    ],
})

export class NoctuaConfirmDialogModule {
}
