import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AnnoqConfigService } from '@annoq/services/config.service';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
    selector: 'layout-annoq',
    templateUrl: './layout-annoq.component.html',
    styleUrls: ['./layout-annoq.component.scss'],
    encapsulation: ViewEncapsulation.None
}

) export class LayoutAnnoqComponent implements OnInit, OnDestroy {
    annoqConfig: any;
    navigation: any;
    private _unsubscribeAll: Subject<any>;
    @ViewChild('sidenav') sidenav: MatSidenav;

    constructor(private _annoqConfigService: AnnoqConfigService) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this._annoqConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((config) => {
                this.annoqConfig = config;
            });
    }
    ngOnDestroy(): void {
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    toggleSidenav() {
        this.sidenav.toggle();
      }
}