import {Component, OnInit} from '@angular/core';
import {OffreService} from "../../../../controller/service/offre.service";
import {Offre} from "../../../../controller/model/offre.model";

@Component({
	selector: 'app-offre-view-admin',
	templateUrl: './offre-view-admin.component.html',
	styleUrls: ['./offre-view-admin.component.css']
})
export class OffreViewAdminComponent implements  OnInit{

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