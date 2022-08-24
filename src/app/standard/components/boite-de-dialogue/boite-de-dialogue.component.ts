import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

/* 
Objectif:
Interaction utilisateur via les boites de dialogue alert , confirm et prompt.

Énoncé 
Créer un document html qui contient 2 boutons .

Ecrire un script qui affiche le message "Hello World" après le clic sur le premier bouton.
Lors du clic sur le  deuxième bouton  demander à l'utilisateur de saisir son nom. ensuite demander une confirmation du nom de l'utilisateur. Si le nom est confirmé, afficher ce dernier dans une boîte de dialogue.
//Source : www.exelib.net

*/

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
