import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './services/app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  // menus
  menus = this.appService.menus;

  constructor(public appService: AppService, public router: Router) {
    console.log(router.url);
  }
}
