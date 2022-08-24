import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

/* 
Objectif:
Utiliser les structures de condition if..else. 

Énoncé 
Ecrire un script qui demande l’âge d’un enfant à l’utilisateur suite au clic sur un bouton. Ensuite, il l’informe de sa catégorie :

« Poussin » de 6 à 7 ans
« Pupille » de 8 à 9 ans
« Minime » de 10 à 11 ans
« Cadet » de 12 ans à 17 ans
Le script affiche un message d'erreur si la valeur saisie par l'utilisateur est vide ou non numérique ou une valeur numérique supérieure à 17.
//Source : www.exelib.net

*/

@Component({
  selector: 'app-identifier-categorie',
  templateUrl: './identifier-categorie.component.html',
  styleUrls: ['./identifier-categorie.component.less']
})
export class IdentifierCategorieComponent {
  protected title: string;
  
  constructor(protected router: Router, appService: AppService) {
    this.title = appService.menus.filter(
      (item) => item.url === router.url
    )[0].title;
  }

  setCategorie() {
    let l_age = prompt("Saisir l'âge de l'enfant");

    if (l_age === "" || (l_age!==null && parseInt(l_age) > 17) || (l_age!==null && parseInt(l_age) < 6)) {
      alert("Erreur, veuillez renseigner un âge valide, compris entre 6 et 17 ans");
    } else {
      if (l_age !== null) {
        if (parseInt(l_age) >= 6 && parseInt(l_age) <= 7) {
          alert("L'enfant appartient à la catégorie 'Poussin'");
        } else if (parseInt(l_age) >= 8 && parseInt(l_age) <= 9) {        
          alert("L'enfant appartient à la catégorie 'Pupille'");
        } else if (parseInt(l_age) >= 10 && parseInt(l_age) <= 11) {        
          alert("L'enfant appartient à la catégorie 'Minime'");
        } else {        
          alert("L'enfant appartient à la catégorie 'Cadet'");
        }
      }
    }
  }
}
