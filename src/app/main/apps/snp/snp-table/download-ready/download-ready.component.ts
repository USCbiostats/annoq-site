import { Component, OnInit, Inject } from '@angular/core';
import { SnpService } from './../../services/snp.service'
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { environment } from 'environments/environment';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-download-ready',
  templateUrl: './download-ready.component.html',
  styleUrls: ['./download-ready.component.scss']
})
export class DownloadReadyComponent implements OnInit {
  private _unsubscribeAll: Subject<any>;
  snackBarRef: MatSnackBarRef<DownloadReadyComponent>;
  downloadUrl: any;

  constructor(
    private snpService: SnpService,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {
    this.downloadUrl = environment.annotationApi + data.url
    this._unsubscribeAll = new Subject();
  }

  ngOnInit() {


  }

  close() {
    console.log('abc');
    this.snackBarRef.dismiss();
  }
}
