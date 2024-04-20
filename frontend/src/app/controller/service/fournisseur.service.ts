import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Fournisseur} from "../model/fournisseur.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})

export class FournisseurService {

	 private _fournisseur !: Fournisseur ;
	 private _fournisseurList !: Array<Fournisseur> ;

	 private _createDialog: boolean;

	 private _editDialog: boolean;

	 private _viewDialog: boolean;

	 _errorMessages = new Array<string>();

	 constructor(private _http: HttpClient) { }

	 public save(fournisseur : Fournisseur):Observable<Fournisseur>{
		return this._http.post<Fournisseur>(environment.url +'fournisseur/' , fournisseur);
	}
	 public update(fournisseur : Fournisseur):Observable<Fournisseur>{
		return this._http.put<Fournisseur>(environment.url +'fournisseur/' ,fournisseur);
	}
	 public findAll():Observable<Array<Fournisseur>>{
		return this._http.get<Array<Fournisseur>>(environment.url +'fournisseur/');
	}
	 public findById(id : number):Observable<Fournisseur>{
		return this._http.get<Fournisseur>(environment.url +'fournisseur/id/' + id);
	}
	 public findByNomSociete(nomSociete : string):Observable<Array<Fournisseur>>{
		return this._http.get<Array<Fournisseur>>(environment.url +'fournisseur/nomSociete/' + nomSociete);
	}
	 public findByAdrPostale(adrPostale : string):Observable<Array<Fournisseur>>{
		return this._http.get<Array<Fournisseur>>(environment.url +'fournisseur/adrPostale/' + adrPostale);
	}
	 public findByCategorieId(id : number):Observable<Array<Fournisseur>>{
		return this._http.get<Array<Fournisseur>>(environment.url +'fournisseur/categorieId/' + id);
	}
	 public findByCategorieNom(nom : string):Observable<Array<Fournisseur>>{
		return this._http.get<Array<Fournisseur>>(environment.url +'fournisseur/categorieNom/' + nom);
	}
	 public findByCategorieDescription(description : string):Observable<Array<Fournisseur>>{
		return this._http.get<Array<Fournisseur>>(environment.url +'fournisseur/categorieDescription/' + description);
	}
	 public deleteById(id : number):Observable<Fournisseur>{
		return this._http.delete<Fournisseur>(environment.url +'fournisseur/id/' + id);
	}
	 public deleteByNomSociete(nomSociete : string):Observable<number>{
		return this._http.delete<number>(environment.url +'fournisseur/nomSociete/' + nomSociete);
	}
	 public deleteByAdrPostale(adrPostale : string):Observable<number>{
		return this._http.delete<number>(environment.url +'fournisseur/adrPostale/' + adrPostale);
	}
	 public deleteByCategorieId(id : number):Observable<number>{
		return this._http.delete<number>(environment.url +'fournisseur/categorieId/' + id);
	}
	 public deleteByCategorieNom(nom : string):Observable<number>{
		return this._http.delete<number>(environment.url +'fournisseur/categorieNom/' + nom);
	}
	 public deleteByCategorieDescription(description : string):Observable<number>{
		return this._http.delete<number>(environment.url +'fournisseur/categorieDescription/' + description);
	}
	 get fournisseur(): Fournisseur {
		if (this._fournisseur == null){
			this._fournisseur= new Fournisseur();
		}
		return this._fournisseur;
	}

	 set fournisseur(value : Fournisseur) {
		this._fournisseur= value;
	}

	 get fournisseurList(): Array<Fournisseur> {
		if (this._fournisseurList == null){
			this._fournisseurList= new Array<Fournisseur>();
		}
		return this._fournisseurList;
	}

	 set fournisseurList(value : Array<Fournisseur>) {
		this._fournisseurList= value;
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
