
import { Injectable } from '@angular/core';
import { Recette } from '../models/recette.model';

@Injectable({
  providedIn: 'root'
})
export class RecetteService {

  recettes: Recette[];

  recette!: Recette;

  constructor() {
    this.recettes = [
      {
        idRecette: 1,
        nomRecette: 'Ojja tunisienne',
        tempsPreparation: 25,
        difficulte: 'Facile',
        dateAjout: new Date('2026-10-01'),
        paysOrigine: 'Tunisie'
      },
      {
        idRecette: 2,
        nomRecette: 'Salade au thon',
        tempsPreparation: 15,
        difficulte: 'Facile',
        dateAjout: new Date('2026-10-02'),
        paysOrigine: 'Tunisie'
      },
      {
        idRecette: 3,
        nomRecette: 'Couscous aux légumes',
        tempsPreparation: 60,
        difficulte: 'Moyenne',
        dateAjout: new Date('2026-10-03'),
        paysOrigine: 'Tunisie'
      }
    ];
  }

  listeRecettes(): Recette[] {
    return this.recettes;
  }

  ajouterRecette(recette: Recette): void {
    this.recettes.push(recette);
  }

  supprimerRecette(recette: Recette): void {
    const index = this.recettes.indexOf(recette);
    if (index > -1) {
      this.recettes.splice(index, 1);
    }
  }

  consulterRecette(id: number): Recette {
    this.recette = this.recettes.find(r => r.idRecette == id)!;
    return this.recette;
  }

  updateRecette(recette: Recette): void {
    const index = this.recettes.findIndex(
      r => r.idRecette === recette.idRecette
    );
    if (index > -1) {
      this.recettes[index] = recette;
    }
  }
}
