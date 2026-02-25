import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DownloadReadyComponent } from '../snp-table/download-ready/download-ready.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
    providedIn: 'root',
})
export class SnpDialogService {

    dialogRef: any;

    constructor(private httpClient: HttpClient,
        private snackBar: MatSnackBar,
        private _matDialog: MatDialog) {
    }

    openMessageToast(message: string, action: string) {
        this.snackBar.open(message, action, {
            duration: 10000,
            verticalPosition: 'top'
        });
    }

    openDownloadToast(data) {
        this.snackBar.openFromComponent(DownloadReadyComponent, {
            data: data,
            duration: 20000,
        });
    }

}
