
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Recette } from '../models/recette.model';
import { RecetteService } from '../services/recette.service';
import { paysOrigine } from '../models/paysOrigine.model';

@Component({
  imports: [FormsModule],
  selector: 'app-add-recette',
  standalone: true,
  templateUrl: './add-recette.html',
})
export class AddRecetteComponent implements OnInit {

  recettes!: Recette[];
  newRecette = new Recette();
  message?: string;

  paysOrigine!: paysOrigine[];
  newIdpaysOrigine!: number;
  newPaysOrigine!: paysOrigine;

  constructor(
    private recetteService: RecetteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.paysOrigine = this.recetteService.listepaysOrigine();
  }

  addRecette(): void {
    this.newPaysOrigine =
      this.recetteService.consulterpaysOrigine(
        this.newIdpaysOrigine
      );

    this.newRecette.paysOrigine = this.newPaysOrigine;

    this.recetteService.ajouterRecette(this.newRecette);

    this.message = 'Recette ajoutée avec succès';

    this.router.navigate(['recettes']);
  }
}
