
import { Routes } from '@angular/router';
import { RecetteComponent } from './recette/recette';
import { AddRecetteComponent } from './add-recette/add-recette';
import { UpdateRecetteComponent } from './update-recette/update-recette';

export const routes: Routes = [
  { path: 'recettes', component: RecetteComponent },
  { path: 'add-recette', component: AddRecetteComponent },
  { path: 'update-recette/:id', component: UpdateRecetteComponent },
  { path: '', redirectTo: 'recettes', pathMatch: 'full' }
];
