import { Component, OnInit } from '@angular/core';
import { NoctuaMenuService } from '@noctua.common/services/noctua-menu.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public noctuaMenuService: NoctuaMenuService) {
  }

  ngOnInit() {
  }
}
