import {Component, OnInit} from '@angular/core';
import {CommentaireService} from "../../../../controller/service/commentaire.service";
import {Commentaire} from "../../../../controller/model/commentaire.model";

@Component({
	selector: 'app-commentaire-create-admin',
	templateUrl: './commentaire-create-admin.component.html',
	styleUrls: ['./commentaire-create-admin.component.css']
})
export class CommentaireCreateAdminComponent implements  OnInit{

	ngOnInit(): void {
	}

	constructor(private commentaireService : CommentaireService) {
	}

	 get commentaire(): Commentaire { 
		return this.commentaireService.commentaire;
	}

	 set commentaire(value : Commentaire) { 
		this.commentaireService.commentaire= value;
	}

	 get commentaireList(): Array<Commentaire> { 
		return this.commentaireService.commentaireList;
	}

	 set commentaireList(value : Array<Commentaire>) { 
		this.commentaireService.commentaireList= value;
	}

}