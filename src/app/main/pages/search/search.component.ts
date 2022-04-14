import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { MatDrawer } from '@angular/material/sidenav';

import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';
import { RightPanel } from '@annoq.common/models/menu-panels';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  RightPanel = RightPanel;

  @ViewChild('leftDrawer', { static: true })
  leftDrawer: MatDrawer;

  @ViewChild('rightDrawer', { static: true })
  rightDrawer: MatDrawer;

  searchCriteria: any = {};
  searchForm: FormGroup;
  leftPanelMenu;

  constructor(public annoqMenuService: AnnoqMenuService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.annoqMenuService.setLeftDrawer(this.leftDrawer);
    this.annoqMenuService.setRightDrawer(this.rightDrawer);
  }
}
