import {Component, OnInit} from '@angular/core';
import {AdministrateurService} from "../../../../controller/service/administrateur.service";
import {Administrateur} from "../../../../controller/model/administrateur.model";

@Component({
	selector: 'app-administrateur-create-admin',
	templateUrl: './administrateur-create-admin.component.html',
	styleUrls: ['./administrateur-create-admin.component.css']
})
export class AdministrateurCreateAdminComponent implements  OnInit{

	ngOnInit(): void {
	}

	constructor(private administrateurService : AdministrateurService) {
	}

	 get administrateur(): Administrateur { 
		return this.administrateurService.administrateur;
	}

	 set administrateur(value : Administrateur) { 
		this.administrateurService.administrateur= value;
	}

	 get administrateurList(): Array<Administrateur> { 
		return this.administrateurService.administrateurList;
	}

	 set administrateurList(value : Array<Administrateur>) { 
		this.administrateurService.administrateurList= value;
	}

}