import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RxjsBaseComponent } from 'src/app/classes/rxjs-base-component';
import { RxjsBaseService } from '../../services/rxjs.service';

@Component({
  selector: 'app-tableau-insert',
  templateUrl: './tableau-insert.component.html',
  styleUrls: ['./tableau-insert.component.css'],
})
export class TableauInsertComponent extends RxjsBaseComponent {
  compteurs: any = [
    {
      libelle: 'Heures travaillées',
      rang: 10,
      isMiseEnValeur: '0',
      isCommentModifiable: '0',
      isModifiable: '0',
      semaine27: 7,
      semaine28: 8,
      semaine26: 2,
      isRegule: '0',
      id: null,
      comment: null,
      mois: 50.5,
      isDetailPossible: '1',
      idTypeCompteur: 5,
      showDetail: null,
    },
    {
      libelle: 'Heures assimilées',
      rang: 20,
      isMiseEnValeur: '0',
      isCommentModifiable: '0',
      isModifiable: '0',
      semaine27: null,
      semaine28: 9.21,
      semaine26: null,
      isRegule: '0',
      id: null,
      comment: null,
      mois: 9.21,
      isDetailPossible: '1',
      idTypeCompteur: 2,
      showDetail: null,
    },
    {
      libelle: 'Total heures de travail effectif',
      rang: 30,
      isMiseEnValeur: '1',
      isCommentModifiable: '0',
      isModifiable: '0',
      semaine27: 112,
      semaine28: 17.21,
      semaine26: 32,
      isRegule: '0',
      id: 18582,
      comment: null,
      mois: 164.71,
      isDetailPossible: '0',
      idTypeCompteur: 4,
      showDetail: null,
    },
    {
      libelle: 'Jours ouvrés',
      rang: 40,
      isMiseEnValeur: '0',
      isCommentModifiable: '0',
      isModifiable: '0',
      semaine27: 5,
      semaine28: 5,
      semaine26: 1,
      isRegule: '0',
      id: null,
      comment: null,
      mois: 21,
      isDetailPossible: '0',
      idTypeCompteur: 12,
      showDetail: null,
    },
    {
      libelle: 'Jours fériés',
      rang: 1030,
      isMiseEnValeur: '0',
      isCommentModifiable: '0',
      isModifiable: '0',
      semaine27: null,
      semaine28: 1,
      semaine26: null,
      isRegule: '0',
      id: null,
      comment: null,
      mois: 1,
      isDetailPossible: '0',
      idTypeCompteur: 3,
      showDetail: null,
    },
    {
      libelle: 'Jours de présence réels',
      rang: 1040,
      isMiseEnValeur: '0',
      isCommentModifiable: '0',
      isModifiable: '0',
      semaine27: 5,
      semaine28: 4,
      semaine26: 1,
      isRegule: '0',
      id: null,
      comment: null,
      mois: 20,
      isDetailPossible: '0',
      idTypeCompteur: 10,
      showDetail: null,
    },
    {
      libelle: 'Potentiel heures',
      rang: 1050,
      isMiseEnValeur: '1',
      isCommentModifiable: '0',
      isModifiable: '0',
      semaine27: 516.92,
      semaine28: 25.85,
      semaine26: 103.38,
      isRegule: '0',
      id: 18587,
      comment: null,
      mois: 613.84,
      isDetailPossible: '0',
      idTypeCompteur: 7,
      showDetail: null,
    },
    {
      libelle: 'Seuil maxi',
      rang: 1070,
      isMiseEnValeur: '0',
      isCommentModifiable: '0',
      isModifiable: '0',
      semaine27: null,
      semaine28: null,
      semaine26: null,
      isRegule: '0',
      id: null,
      comment: null,
      mois: 818.43,
      isDetailPossible: '0',
      idTypeCompteur: 11,
      showDetail: null,
    },
    {
      libelle: 'Seuil mini',
      rang: 1080,
      isMiseEnValeur: '0',
      isCommentModifiable: '0',
      isModifiable: '0',
      semaine27: null,
      semaine28: null,
      semaine26: null,
      isRegule: '0',
      id: null,
      comment: null,
      mois: 409.24,
      isDetailPossible: '0',
      idTypeCompteur: 8,
      showDetail: null,
    },
    {
      libelle: 'Heures perdues',
      rang: 1090,
      isMiseEnValeur: '0',
      isCommentModifiable: '0',
      isModifiable: '0',
      semaine27: null,
      semaine28: null,
      semaine26: null,
      isRegule: '0',
      id: 18999,
      comment: null,
      mois: 244.53,
      isDetailPossible: '0',
      idTypeCompteur: 6,
      showDetail: null,
    },
    {
      libelle: 'Ecart',
      rang: 1100,
      isMiseEnValeur: '1',
      isCommentModifiable: '0',
      isModifiable: '0',
      semaine27: null,
      semaine28: null,
      semaine26: null,
      isRegule: '0',
      id: 18588,
      comment: null,
      mois: -204.59,
      isDetailPossible: '0',
      idTypeCompteur: 9,
      showDetail: null,
    },
    {
      libelle: 'Ecart cumulé',
      rang: 1130,
      isMiseEnValeur: null,
      isCommentModifiable: null,
      isModifiable: null,
      semaine27: null,
      semaine28: null,
      semaine26: null,
      isRegule: null,
      id: null,
      comment: null,
      mois: -219.21,
      isDetailPossible: '0',
      idTypeCompteur: 1,
      showDetail: null,
    },
  ];

  public getDetail(a_event: MouseEvent, a_row: any, a_openClose: string) {
    a_event.stopPropagation();

    if (!a_row.showDetail && a_openClose === 'open') {
      a_row.showDetail = true;

      // récupération de l'index de la ligne sous laquelle insérer ou supprimer des lignes
      let l_index = this.compteurs.findIndex(
        (item: any) => item.idTypeCompteur === a_row.idTypeCompteur
      );

      if (l_index > -1) {
        let l_sousListe: any = [
          {
            libelle: 'Heures bis',
            rang: 10,
            isMiseEnValeur: '0',
            isCommentModifiable: '0',
            isModifiable: '0',
            semaine27: 7,
            semaine28: 8,
            semaine26: 2,
            isRegule: '0',
            id: null,
            comment: null,
            mois: 50.5,
            isDetailPossible: '0',
            refTypeCompteur: a_row.idTypeCompteur,
            showDetail: null,
          },
          {
            libelle: 'Heures bis bis',
            rang: 11,
            isMiseEnValeur: '0',
            isCommentModifiable: '0',
            isModifiable: '0',
            semaine27: 7,
            semaine28: 8,
            semaine26: 2,
            isRegule: '0',
            id: null,
            comment: null,
            mois: 52,
            isDetailPossible: '0',
            refTypeCompteur: a_row.idTypeCompteur,
            showDetail: null,
          },
        ];
        for (let i = l_sousListe.length - 1; i >= 0; i--) {
          this.compteurs.splice(l_index + 1, 0, l_sousListe[i]);
        }
      }
    } else {
      a_row.showDetail = false;

      let l_lignes = this.compteurs.filter(
        (item: any) => item.refTypeCompteur === a_row.idTypeCompteur
      );
      this.compteurs.splice(
        this.compteurs.findIndex(
          (item: any) => item.refTypeCompteur === a_row.idTypeCompteur
        ),
        l_lignes.length
      );
    }
  }

  constructor(public rxjsBaseService: RxjsBaseService, router: Router) {
    super(router, rxjsBaseService);
  }
}
