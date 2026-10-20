import {paysOrigine} from "./paysOrigine.model";
export class Recette {
  idRecette!: number;
  nomRecette!: string;
  tempsPreparation!: number;
  difficulte!: string;
  dateAjout!: Date;
  paysOrigine!: paysOrigine;
}
