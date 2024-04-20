import {Component, OnInit} from '@angular/core';
import {CommentaireService} from "../../../../controller/service/commentaire.service";
import {Commentaire} from "../../../../controller/model/commentaire.model";

@Component({
	selector: 'app-commentaire-list-admin',
	templateUrl: './commentaire-list-admin.component.html',
	styleUrls: ['./commentaire-list-admin.component.css']
})
export class CommentaireListAdminComponent implements  OnInit{

	ngOnInit(): void {
	this.findAll();
	}

	constructor(private commentaireService : CommentaireService) {
	}

	 public findAll() { 
		return this.commentaireService.findAll().subscribe(data => this.commentaireList= data);
	}
	 public deleteById(id:number,index:number) { 
		return this.commentaireService.deleteById(id).subscribe(data => {
            if (data != null) {
                this.commentaireList.splice( index,1);
            } else {
                alert('DEL ERROR')
            }
        });

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