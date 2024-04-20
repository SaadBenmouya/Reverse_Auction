import {Component, OnInit} from '@angular/core';
import {FournisseurService} from "../../../../controller/service/fournisseur.service";
import {Fournisseur} from "../../../../controller/model/fournisseur.model";

@Component({
	selector: 'app-fournisseur-view-admin',
	templateUrl: './fournisseur-view-admin.component.html',
	styleUrls: ['./fournisseur-view-admin.component.css']
})
export class FournisseurViewAdminComponent implements  OnInit{

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