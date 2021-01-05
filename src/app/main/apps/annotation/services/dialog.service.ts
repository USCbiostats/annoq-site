import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnnotationDetailDialogComponent } from '../dialogs/annotation-detail/annotation-detail.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
    providedIn: 'root',
})
export class AnnotationDialogService {

    dialogRef: any;

    constructor(
        private snackBar: MatSnackBar,
        private _matDialog: MatDialog) {
    }

    openAnnotationDetailDialog(annotation: any[]): void {
        this.dialogRef = this._matDialog.open(AnnotationDetailDialogComponent, {
            panelClass: 'annoton-errors-dialog',
            data: {
                annotation: annotation
            }
        });
        this.dialogRef.afterClosed()
            .subscribe(response => {

            });
    }

}
