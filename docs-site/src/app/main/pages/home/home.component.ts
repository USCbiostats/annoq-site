import { Component, OnInit } from '@angular/core';
import { NoctuaMenuService } from '@noctua.common/services/noctua-menu.service';
import { noctuaAnimations } from '@noctua/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: noctuaAnimations
})
export class HomeComponent implements OnInit {

  constructor(public noctuaMenuService: NoctuaMenuService) {
  }

  ngOnInit() {
  }
}
