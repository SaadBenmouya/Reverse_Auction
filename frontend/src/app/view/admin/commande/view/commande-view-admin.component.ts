import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../../../controller/service/commande.service";
import {Commande} from "../../../../controller/model/commande.model";

@Component({
	selector: 'app-commande-view-admin',
	templateUrl: './commande-view-admin.component.html',
	styleUrls: ['./commande-view-admin.component.css']
})
export class CommandeViewAdminComponent implements  OnInit{

	ngOnInit(): void {
	}

	constructor(private commandeService : CommandeService) {
	}

	 get commande(): Commande { 
		return this.commandeService.commande;
	}

	 set commande(value : Commande) { 
		this.commandeService.commande= value;
	}

	 get commandeList(): Array<Commande> { 
		return this.commandeService.commandeList;
	}

	 set commandeList(value : Array<Commande>) { 
		this.commandeService.commandeList= value;
	}

}