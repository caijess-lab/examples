import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-boite-de-dialogue',
  templateUrl: './boite-de-dialogue.component.html',
  styleUrls: ['./boite-de-dialogue.component.less']
})
export class BoiteDeDialogueComponent {
  protected title: string;

  constructor(protected router: Router, appService: AppService) {
    this.title = appService.menus.filter(
      (item) => item.url === router.url
    )[0].title;
  }

  onClickHelloWorld() {
    alert("Hello World");
  }

  setUserName() {
    let m: any = prompt("Quel est votre nom ?");
    if ((m !== null) && (m !== "")) {
      if (confirm("Confirmez-vous le nom " + m + "?")) {
        alert(m);
      }
    }
  }

}
