import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Administrateur} from "../model/administrateur.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})

export class AdministrateurService {

	 private _administrateur !: Administrateur ;
	 private _administrateurList !: Array<Administrateur> ;

	 private _createDialog: boolean;

	 private _editDialog: boolean;

	 private _viewDialog: boolean;

	 private _errorMessages = new Array<string>();

	 constructor(private _http: HttpClient) { }

	 public save(administrateur : Administrateur):Observable<Administrateur>{
		return this._http.post<Administrateur>(environment.url +'administrateur/' , administrateur);
	}
	 public update(administrateur : Administrateur):Observable<Administrateur>{
		return this._http.put<Administrateur>(environment.url +'administrateur/' ,administrateur);
	}
	 public findAll():Observable<Array<Administrateur>>{
		return this._http.get<Array<Administrateur>>(environment.url +'administrateur/');
	}
	 public findById(id : number):Observable<Administrateur>{
		return this._http.get<Administrateur>(environment.url +'administrateur/id/' + id);
	}

	 public findByNom(nom : string):Observable<Array<Administrateur>>{
		return this._http.get<Array<Administrateur>>(environment.url +'administrateur/nom/' + nom);
	}
	 public findByPrenom(prenom : string):Observable<Array<Administrateur>>{
		return this._http.get<Array<Administrateur>>(environment.url +'administrateur/prenom/' + prenom);
	}
	 public deleteById(id : number):Observable<Administrateur>{
		return this._http.delete<Administrateur>(environment.url +'administrateur/id/' + id);
	}

	 public deleteByNom(nom : string):Observable<number>{
		return this._http.delete<number>(environment.url +'administrateur/nom/' + nom);
	}
	 public deleteByPrenom(prenom : string):Observable<number>{
		return this._http.delete<number>(environment.url +'administrateur/prenom/' + prenom);
	}
	 get administrateur(): Administrateur {
		if (this._administrateur == null){
			this._administrateur= new Administrateur();
		}
		return this._administrateur;
	}

	 set administrateur(value : Administrateur) {
		this._administrateur= value;
	}

	 get administrateurList(): Array<Administrateur> {
		if (this._administrateurList == null){
			this._administrateurList= new Array<Administrateur>();
		}
		return this._administrateurList;
	}

	 set administrateurList(value : Array<Administrateur>) {
		this._administrateurList= value;
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
