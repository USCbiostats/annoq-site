import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDrawer } from '@angular/material/sidenav';

import { NoctuaMenuService } from '@noctua.common/services/noctua-menu.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @ViewChild('leftDrawer', { static: true })
  leftDrawer: MatDrawer;

  @ViewChild('rightDrawer', { static: true })
  rightDrawer: MatDrawer;

  searchCriteria: any = {};
  searchForm: FormGroup;
  leftPanelMenu;

  constructor(public noctuaMenuService: NoctuaMenuService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.noctuaMenuService.setLeftDrawer(this.leftDrawer);
    this.noctuaMenuService.setRightDrawer(this.rightDrawer);
  }
}
