import {Component, OnInit} from '@angular/core';
import {CommentaireService} from "../../../../controller/service/commentaire.service";
import {Commentaire} from "../../../../controller/model/commentaire.model";

@Component({
	selector: 'app-commentaire-view-admin',
	templateUrl: './commentaire-view-admin.component.html',
	styleUrls: ['./commentaire-view-admin.component.css']
})
export class CommentaireViewAdminComponent implements  OnInit{

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