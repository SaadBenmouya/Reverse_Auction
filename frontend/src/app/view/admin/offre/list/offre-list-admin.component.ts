import {Component, OnInit} from '@angular/core';
import {OffreService} from "../../../../controller/service/offre.service";
import {Offre} from "../../../../controller/model/offre.model";

@Component({
	selector: 'app-offre-list-admin',
	templateUrl: './offre-list-admin.component.html',
	styleUrls: ['./offre-list-admin.component.css']
})
export class OffreListAdminComponent implements  OnInit{

	ngOnInit(): void {
	this.findAll();
	}

	constructor(private offreService : OffreService) {
	}

	 public findAll() { 
		return this.offreService.findAll().subscribe(data => this.offreList= data);
	}
	 public deleteById(id:number,index:number) { 
		return this.offreService.deleteById(id).subscribe(data => {
            if (data != null) {
                this.offreList.splice( index,1);
            } else {
                alert('DEL ERROR')
            }
        });

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