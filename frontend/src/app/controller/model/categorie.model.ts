import {Fournisseur} from "./fournisseur.model";

export class Categorie {

	 public id !: number;
	 public nom !: string;
	 public description !: string;
	 public fournisseur !: Fournisseur;
}