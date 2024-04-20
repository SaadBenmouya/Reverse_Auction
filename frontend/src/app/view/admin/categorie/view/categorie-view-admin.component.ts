import {Component, OnInit} from '@angular/core';
import {CategorieService} from "../../../../controller/service/categorie.service";
import {Categorie} from "../../../../controller/model/categorie.model";

@Component({
	selector: 'app-categorie-view-admin',
	templateUrl: './categorie-view-admin.component.html',
	styleUrls: ['./categorie-view-admin.component.css']
})
export class CategorieViewAdminComponent implements  OnInit{

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