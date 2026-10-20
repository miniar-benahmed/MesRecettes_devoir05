import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Recette } from '../models/recette.model';
import { RecetteService } from '../services/recette.service';
import { paysOrigine } from '../models/paysOrigine.model';

@Component({
  selector: 'app-update-recette',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './update-recette.html'
})
export class UpdateRecetteComponent implements OnInit {

  currentRecette = new Recette();
  paysOrigine!: paysOrigine[];
  updateidpaysOrigine!: number;
  message?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private recetteService: RecetteService
  ) {}

  ngOnInit(): void {
    this.paysOrigine = this.recetteService.listepaysOrigine();
    this.currentRecette = this.recetteService.consulterRecette(
      Number(this.activatedRoute.snapshot.params['id'])
    );
    this.updateidpaysOrigine = this.currentRecette.paysOrigine.idpaysOrigine;
  }

  onDateChange(value: string) {
    if (value) {
      this.currentRecette.dateAjout = new Date(value);
    }
  }

  updateRecette() {
    this.currentRecette.paysOrigine =
      this.recetteService.consulterpaysOrigine(this.updateidpaysOrigine);
    this.recetteService.updateRecette(this.currentRecette);
    this.router.navigate(['recettes']);
  }
}