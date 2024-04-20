import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categorie} from "../model/categorie.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})

export class CategorieService {

	 private _categorie !: Categorie ;
	 private _categorieList !: Array<Categorie> ;

	 private _createDialog: boolean;

	 private _editDialog: boolean;

	 private _viewDialog: boolean;

	 _errorMessages = new Array<string>();

	 constructor(private _http: HttpClient) { }

	 public save(categorie : Categorie):Observable<Categorie>{
		return this._http.post<Categorie>(environment.url +'categorie/' , categorie);
	}
	 public update(categorie : Categorie):Observable<Categorie>{
		return this._http.put<Categorie>(environment.url +'categorie/' ,categorie);
	}
	 public findAll():Observable<Array<Categorie>>{
		return this._http.get<Array<Categorie>>(environment.url +'categorie/');
	}
	 public findById(id : number):Observable<Categorie>{
		return this._http.get<Categorie>(environment.url +'categorie/id/' + id);
	}
	 public findByNom(nom : string):Observable<Array<Categorie>>{
		return this._http.get<Array<Categorie>>(environment.url +'categorie/nom/' + nom);
	}
	 public findByDescription(description : string):Observable<Array<Categorie>>{
		return this._http.get<Array<Categorie>>(environment.url +'categorie/description/' + description);
	}
	 public findByFournisseurId(id : number):Observable<Array<Categorie>>{
		return this._http.get<Array<Categorie>>(environment.url +'categorie/fournisseurId/' + id);
	}
	 public findByFournisseurNomSociete(nomSociete : string):Observable<Array<Categorie>>{
		return this._http.get<Array<Categorie>>(environment.url +'categorie/fournisseurNomSociete/' + nomSociete);
	}
	 public findByFournisseurAdrPostale(adrPostale : string):Observable<Array<Categorie>>{
		return this._http.get<Array<Categorie>>(environment.url +'categorie/fournisseurAdrPostale/' + adrPostale);
	}
	 public deleteById(id : number):Observable<Categorie>{
		return this._http.delete<Categorie>(environment.url +'categorie/id/' + id);
	}
	 public deleteByNom(nom : string):Observable<number>{
		return this._http.delete<number>(environment.url +'categorie/nom/' + nom);
	}
	 public deleteByDescription(description : string):Observable<number>{
		return this._http.delete<number>(environment.url +'categorie/description/' + description);
	}
	 public deleteByFournisseurId(id : number):Observable<number>{
		return this._http.delete<number>(environment.url +'categorie/fournisseurId/' + id);
	}
	 public deleteByFournisseurNomSociete(nomSociete : string):Observable<number>{
		return this._http.delete<number>(environment.url +'categorie/fournisseurNomSociete/' + nomSociete);
	}
	 public deleteByFournisseurAdrPostale(adrPostale : string):Observable<number>{
		return this._http.delete<number>(environment.url +'categorie/fournisseurAdrPostale/' + adrPostale);
	}
	 get categorie(): Categorie {
		if (this._categorie == null){
			this._categorie= new Categorie();
		}
		return this._categorie;
	}

	 set categorie(value : Categorie) {
		this._categorie= value;
	}

	 get categorieList(): Array<Categorie> {
		if (this._categorieList == null){
			this._categorieList= new Array<Categorie>();
		}
		return this._categorieList;
	}

	 set categorieList(value : Array<Categorie>) {
		this._categorieList= value;
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
