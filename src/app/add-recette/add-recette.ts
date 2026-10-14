
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Recette } from '../models/recette.model';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-add-recette',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './add-recette.html'
})
export class AddRecetteComponent {

  newRecette = new Recette();
  message?: string;

  constructor(
    private recetteService: RecetteService,
    private router: Router
  ) {}

  addRecette(): void {
    if (
      !this.newRecette.idRecette ||
      !this.newRecette.nomRecette?.trim() ||
      !this.newRecette.tempsPreparation ||
      !this.newRecette.difficulte ||
      !this.newRecette.paysOrigine
    ) {
      this.message = 'Veuillez remplir tous les champs.';
      return;
    }

    const recetteExistante = this.recetteService
      .listeRecettes()
      .some(r => r.idRecette === Number(this.newRecette.idRecette));

    if (recetteExistante) {
      this.message = 'Cet identifiant existe déjà.';
      return;
    }

    this.newRecette.idRecette = Number(this.newRecette.idRecette);
    this.newRecette.tempsPreparation = Number(this.newRecette.tempsPreparation);
    this.newRecette.dateAjout = new Date();

    this.recetteService.ajouterRecette(this.newRecette);
    this.router.navigate(['/recettes']);
  }
}
