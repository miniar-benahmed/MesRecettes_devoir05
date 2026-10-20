import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Recette } from '../models/recette.model';
import { paysOrigine } from '../models/paysOrigine.model';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-recherche-par-pays-origine',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './recherche-par-pays-origine.html'
})
export class RechercheParPaysOrigine implements OnInit {

  recettes: Recette[] = [];
  paysOrigine!: paysOrigine[];
  idPaysOrigine!: number;

  constructor(private recetteService: RecetteService) {}

  ngOnInit(): void {
    this.paysOrigine = this.recetteService.listepaysOrigine();
    this.recettes = this.recetteService.listeRecettes();
  }

  onChange(id: number) {
    this.recettes = this.recetteService.rechercherParPaysOrigine(id);
  }

  supprimerRecette(recette: Recette) {
    if (confirm('Voulez-vous vraiment supprimer cette recette ?')) {
      this.recetteService.supprimerRecette(recette);
      this.recettes = this.idPaysOrigine
        ? this.recetteService.rechercherParPaysOrigine(this.idPaysOrigine)
        : this.recetteService.listeRecettes();
    }
  }
}