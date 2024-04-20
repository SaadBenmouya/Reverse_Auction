import {Component, OnInit} from '@angular/core';
import {FournisseurService} from "../../../../controller/service/fournisseur.service";
import {Fournisseur} from "../../../../controller/model/fournisseur.model";

@Component({
	selector: 'app-fournisseur-create-admin',
	templateUrl: './fournisseur-create-admin.component.html',
	styleUrls: ['./fournisseur-create-admin.component.css']
})
export class FournisseurCreateAdminComponent implements  OnInit{

	ngOnInit(): void {
	}

	constructor(private fournisseurService : FournisseurService) {
	}

	 get fournisseur(): Fournisseur { 
		return this.fournisseurService.fournisseur;
	}

	 set fournisseur(value : Fournisseur) { 
		this.fournisseurService.fournisseur= value;
	}

	 get fournisseurList(): Array<Fournisseur> { 
		return this.fournisseurService.fournisseurList;
	}

	 set fournisseurList(value : Array<Fournisseur>) { 
		this.fournisseurService.fournisseurList= value;
	}

}