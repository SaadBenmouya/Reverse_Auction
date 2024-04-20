import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../../../../controller/service/categorie.service";
import {Categorie} from "../../../../controller/model/categorie.model";

@Component({
	selector: 'app-categorie-list-admin',
	templateUrl: './categorie-list-admin.component.html',
	styleUrls: ['./categorie-list-admin.component.css']
})
export class CategorieListAdminComponent implements  OnInit{

	ngOnInit(): void {
	this.findAll();
	}

	constructor(private categorieService : CategorieService) {
	}

	 public findAll() { 
		return this.categorieService.findAll().subscribe(data => this.categorieList= data);
	}
	 public deleteById(id:number,index:number) { 
		return this.categorieService.deleteById(id).subscribe(data => {
            if (data != null) {
                this.categorieList.splice( index,1);
            } else {
                alert('DEL ERROR')
            }
        });

	}
	 get categorie(): Categorie { 
		return this.categorieService.categorie;
	}

	 set categorie(value : Categorie) { 
		this.categorieService.categorie= value;
	}

	 get categorieList(): Array<Categorie> { 
		return this.categorieService.categorieList;
	}

	 set categorieList(value : Array<Categorie>) { 
		this.categorieService.categorieList= value;
	}

}