import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../../../controller/service/commande.service";
import {Commande} from "../../../../controller/model/commande.model";

@Component({
	selector: 'app-commande-list-admin',
	templateUrl: './commande-list-admin.component.html',
	styleUrls: ['./commande-list-admin.component.css']
})
export class CommandeListAdminComponent implements  OnInit{

	ngOnInit(): void {
	this.findAll();
	}

	constructor(private commandeService : CommandeService) {
	}

	 public findAll() { 
		return this.commandeService.findAll().subscribe(data => this.commandeList= data);
	}
	 public deleteById(id:number,index:number) { 
		return this.commandeService.deleteById(id).subscribe(data => {
            if (data != null) {
                this.commandeList.splice( index,1);
            } else {
                alert('DEL ERROR')
            }
        });

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