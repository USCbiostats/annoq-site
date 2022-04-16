import { Component, OnInit } from '@angular/core';
import { browserVersions } from '@annoq.common/data/browser-compatibility';
import { AnnoqMenuService } from '@annoq.common/services/annoq-menu.service';
import { annoqAnimations } from '@annoq/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: annoqAnimations
})
export class HomeComponent implements OnInit {

  displayedColumns = [
    'os',
    'version',
    'chrome',
    'firefox',
    'edge',
    'safari'];
  dataSource = browserVersions;

  constructor(public annoqMenuService: AnnoqMenuService) {
  }

  ngOnInit() {
  }
}
