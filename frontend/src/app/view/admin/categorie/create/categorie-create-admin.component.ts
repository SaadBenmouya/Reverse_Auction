import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../../../../controller/service/categorie.service";
import {Categorie} from "../../../../controller/model/categorie.model";

@Component({
	selector: 'app-categorie-create-admin',
	templateUrl: './categorie-create-admin.component.html',
	styleUrls: ['./categorie-create-admin.component.css']
})
export class CategorieCreateAdminComponent implements  OnInit{

	ngOnInit(): void {
	}

	constructor(private categorieService : CategorieService) {
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