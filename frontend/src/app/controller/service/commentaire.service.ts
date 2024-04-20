import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commentaire} from "../model/commentaire.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})

export class CommentaireService {

	 private _commentaire !: Commentaire ;
	 private _commentaireList !: Array<Commentaire> ;

	 private _createDialog: boolean;

	 private _editDialog: boolean;

	 private _viewDialog: boolean;

	 private _errorMessages = new Array<string>();

	 constructor(private _http: HttpClient) { }

	 public save(commentaire : Commentaire):Observable<Commentaire>{ 
		return this._http.post<Commentaire>(environment.url +'commentaire/' , commentaire);
	}
	 public update(commentaire : Commentaire):Observable<Commentaire>{ 
		return this._http.put<Commentaire>(environment.url +'commentaire/' ,commentaire);
	}
	 public findAll():Observable<Array<Commentaire>>{ 
		return this._http.get<Array<Commentaire>>(environment.url +'commentaire/');
	}
	 public findById(id : number):Observable<Commentaire>{ 
		return this._http.get<Commentaire>(environment.url +'commentaire/id/' + id);
	}
	 public findByDateRedaction(dateRedaction : Date):Observable<Array<Commentaire>>{ 
		return this._http.get<Array<Commentaire>>(environment.url +'commentaire/dateRedaction/' + dateRedaction);
	}
	 public findByContenu(contenu : string):Observable<Array<Commentaire>>{ 
		return this._http.get<Array<Commentaire>>(environment.url +'commentaire/contenu/' + contenu);
	}
	 public deleteById(id : number):Observable<Commentaire>{ 
		return this._http.delete<Commentaire>(environment.url +'commentaire/id/' + id);
	}
	 public deleteByDateRedaction(dateRedaction : Date):Observable<number>{ 
		return this._http.delete<number>(environment.url +'commentaire/dateRedaction/' + dateRedaction);
	}
	 public deleteByContenu(contenu : string):Observable<number>{ 
		return this._http.delete<number>(environment.url +'commentaire/contenu/' + contenu);
	}
	 get commentaire(): Commentaire { 
		if (this._commentaire == null){
			this._commentaire= new Commentaire();
		}
		return this._commentaire;
	}

	 set commentaire(value : Commentaire) { 
		this._commentaire= value;
	}

	 get commentaireList(): Array<Commentaire> { 
		if (this._commentaireList == null){
			this._commentaireList= new Array<Commentaire>();
		}
		return this._commentaireList;
	}

	 set commentaireList(value : Array<Commentaire>) { 
		this._commentaireList= value;
	}

	public  isCreateDialog(): boolean {
	    return this._createDialog;
	}

	public  setCreateDialog( value : boolean)  {
	    this._createDialog = value;
	}

	public  isEditDialog() : boolean {
	    return this._editDialog;
	}

	public setEditDialog(value : boolean): void {
	    this._editDialog = value;
	}

	public  isViewDialog() : boolean {
	    return this._viewDialog;
	}

	public  setViewDialog(value : boolean) : void {
	    this._viewDialog = value;
	}

	public getErrorMessages(): string[] {
        if (this._errorMessages == null) {
            this._errorMessages = new Array<string>();
        }
        return this._errorMessages;
    }

public setErrorMessages(value: string[]) {
        this._errorMessages = value;
    }

}