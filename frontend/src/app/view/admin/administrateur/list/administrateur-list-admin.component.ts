import {Component, OnInit} from '@angular/core';
import {AdministrateurService} from "../../../../controller/service/administrateur.service";
import {Administrateur} from "../../../../controller/model/administrateur.model";

@Component({
	selector: 'app-administrateur-list-admin',
	templateUrl: './administrateur-list-admin.component.html',
	styleUrls: ['./administrateur-list-admin.component.css']
})
export class AdministrateurListAdminComponent implements  OnInit{

	ngOnInit(): void {
	this.findAll();
	}

	constructor(private administrateurService : AdministrateurService) {
	}

	 public findAll() { 
		return this.administrateurService.findAll().subscribe(data => this.administrateurList= data);
	}
	 public deleteById(id:number,index:number) { 
		return this.administrateurService.deleteById(id).subscribe(data => {
            if (data != null) {
                this.administrateurList.splice( index,1);
            } else {
                alert('DEL ERROR')
            }
        });

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