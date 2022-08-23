import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  public goToScreen(a_url: string) {
    this.router.navigate([a_url]);
  }

  menus;

  constructor(public router: Router, public appService: AppService) {
    let l_menus = [...appService.menus];
    l_menus.splice(0, 1);
    this.menus = l_menus;
    console.log(this.menus);
  }
}
