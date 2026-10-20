import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Recette } from '../models/recette.model';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-recherche-par-nom',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './recherche-par-nom.html'
})
export class RechercheParNom implements OnInit {

  nomRecette: string = '';
  recettes: Recette[] = [];

  constructor(private recetteService: RecetteService) {}

  ngOnInit(): void {
    this.recettes = this.recetteService.listeRecettes();
  }

  rechercherRecettes() {
    if (this.nomRecette) {
      this.recettes = this.recetteService.rechercherParNom(this.nomRecette);
    } else {
      this.recettes = this.recetteService.listeRecettes();
    }
  }

  supprimerRecette(recette: Recette) {
    if (confirm('Voulez-vous vraiment supprimer cette recette ?')) {
      this.recetteService.supprimerRecette(recette);
      this.rechercherRecettes();
    }
  }
}