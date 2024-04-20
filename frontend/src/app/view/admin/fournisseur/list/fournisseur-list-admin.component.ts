import {Component, OnInit} from '@angular/core';
import {FournisseurService} from "../../../../controller/service/fournisseur.service";
import {Fournisseur} from "../../../../controller/model/fournisseur.model";

@Component({
	selector: 'app-fournisseur-list-admin',
	templateUrl: './fournisseur-list-admin.component.html',
	styleUrls: ['./fournisseur-list-admin.component.css']
})
export class FournisseurListAdminComponent implements  OnInit{

	ngOnInit(): void {
	this.findAll();
	}

	constructor(private fournisseurService : FournisseurService) {
	}

	 public findAll() { 
		return this.fournisseurService.findAll().subscribe(data => this.fournisseurList= data);
	}
	 public deleteById(id:number,index:number) { 
		return this.fournisseurService.deleteById(id).subscribe(data => {
            if (data != null) {
                this.fournisseurList.splice( index,1);
            } else {
                alert('DEL ERROR')
            }
        });

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