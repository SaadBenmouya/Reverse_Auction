import {Component, OnInit} from '@angular/core';
import {OffreService} from "../../../../controller/service/offre.service";
import {Offre} from "../../../../controller/model/offre.model";

@Component({
	selector: 'app-offre-create-admin',
	templateUrl: './offre-create-admin.component.html',
	styleUrls: ['./offre-create-admin.component.css']
})
export class OffreCreateAdminComponent implements  OnInit{

	ngOnInit(): void {
	}

	constructor(private offreService : OffreService) {
	}

	 get offre(): Offre { 
		return this.offreService.offre;
	}

	 set offre(value : Offre) { 
		this.offreService.offre= value;
	}

	 get offreList(): Array<Offre> { 
		return this.offreService.offreList;
	}

	 set offreList(value : Array<Offre>) { 
		this.offreService.offreList= value;
	}

}