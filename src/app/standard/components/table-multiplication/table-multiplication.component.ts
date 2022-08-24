import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

/* 
Objectif:
Manipuler les boucles for et do..while.

Énoncé 
Ecrire un script qui permet d'afficher la table de multiplication d'un nombre entier n:
La valeur de n sera demandée à l’utilisateur via une boite de dialogue.
En cas de saisie d'un nombre non entier le script redemande l'utilisateur de saisir une nouvelle valeur.
L'affichage de résultat doit être encadré par un tableau html.
Utiliser les boucles imbriquées pour afficher l'ensemble des tables de multiplication pour n=1,2.....10.
//Source : www.exelib.net

*/

@Component({
  selector: 'app-table-multiplication',
  templateUrl: './table-multiplication.component.html',
  styleUrls: ['./table-multiplication.component.less']
})
export class TableMultiplicationComponent  {
  protected title: string;
  
  constructor(protected router: Router, appService: AppService) {
    this.title = appService.menus.filter(
      (item) => item.url === router.url
    )[0].title;
  }

  counter(a_nombre: number) {
    let l_array = new Array(a_nombre);
    for (let i = 0; i < a_nombre; i++) {
      l_array[i] = i+1;
    }
    return l_array;
  }

  multiplierPar!: number;

  setNombre() {
    let l_nombre = prompt("Nombre à multiplier ?");
    if (l_nombre && l_nombre!="") {
      this.multiplierPar = parseInt(l_nombre);
    }
  }

  getMultiplication(a_nombre: number): number|string {
    if (this.multiplierPar) {
      return a_nombre * this.multiplierPar;
    } else {
      return "-";
    }
  }

}
