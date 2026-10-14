
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Recette } from '../models/recette.model';
import { RecetteService } from '../services/recette.service';

@Component({
  selector: 'app-update-recette',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
   styles: ``,
  templateUrl: './update-recette.html'
})
export class UpdateRecetteComponent implements OnInit {

  currentRecette = new Recette();

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private recetteService: RecetteService
  ) {}

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params['id']);
    const recette = this.recetteService.consulterRecette(id);

    if (recette) {
      this.currentRecette = { ...recette };
    } else {
      this.router.navigate(['/recettes']);
    }
  }

  updateRecette(): void {
    this.recetteService.updateRecette(this.currentRecette);
    this.router.navigate(['/recettes']);
  }
}
