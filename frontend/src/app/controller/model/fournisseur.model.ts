import {Categorie} from "./categorie.model";

export class Fournisseur {

	 public id !: number;
	 public nomSociete !: string;
	 public adrPostale !: string;
	 public categories !: Array<Categorie>;
}