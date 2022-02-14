import { Component, OnInit } from '@angular/core';
import { browserVersions } from '@noctua.common/data/browser-compatibility';
import { NoctuaMenuService } from '@noctua.common/services/noctua-menu.service';
import { noctuaAnimations } from '@noctua/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: noctuaAnimations
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

  constructor(public noctuaMenuService: NoctuaMenuService) {
  }

  ngOnInit() {
  }
}
