import {Component, OnInit} from '@angular/core';
import {AdministrateurService} from "../../../../controller/service/administrateur.service";
import {Administrateur} from "../../../../controller/model/administrateur.model";

@Component({
	selector: 'app-administrateur-view-admin',
	templateUrl: './administrateur-view-admin.component.html',
	styleUrls: ['./administrateur-view-admin.component.css']
})
export class AdministrateurViewAdminComponent implements  OnInit{

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