import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Commande} from "../model/commande.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})

export class CommandeService {

	 private _commande !: Commande ;
	 private _commandeList !: Array<Commande> ;

	 private _createDialog: boolean;

	 private _editDialog: boolean;

	 private _viewDialog: boolean;

	 _errorMessages = new Array<string>();

	 constructor(private _http: HttpClient) { }

	 public save(commande : Commande):Observable<Commande>{
		return this._http.post<Commande>(environment.url +'commande/' , commande);
	}
	 public update(commande : Commande):Observable<Commande>{
		return this._http.put<Commande>(environment.url +'commande/' ,commande);
	}
	 public findAll():Observable<Array<Commande>>{
		return this._http.get<Array<Commande>>(environment.url +'commande/');
	}
	 public findById(id : number):Observable<Commande>{
		return this._http.get<Commande>(environment.url +'commande/id/' + id);
	}
	 public findByTitre(titre : string):Observable<Array<Commande>>{
		return this._http.get<Array<Commande>>(environment.url +'commande/titre/' + titre);
	}
	 public findByDescription(description : string):Observable<Array<Commande>>{
		return this._http.get<Array<Commande>>(environment.url +'commande/description/' + description);
	}
	 public findByProduiteur(produiteur : string):Observable<Array<Commande>>{
		return this._http.get<Array<Commande>>(environment.url +'commande/produiteur/' + produiteur);
	}
	 public findByCategorie(categorie : string):Observable<Array<Commande>>{
		return this._http.get<Array<Commande>>(environment.url +'commande/categorie/' + categorie);
	}
	 public deleteById(id : number):Observable<Commande>{
		return this._http.delete<Commande>(environment.url +'commande/id/' + id);
	}
	 public deleteByTitre(titre : string):Observable<number>{
		return this._http.delete<number>(environment.url +'commande/titre/' + titre);
	}
	 public deleteByDescription(description : string):Observable<number>{
		return this._http.delete<number>(environment.url +'commande/description/' + description);
	}
	 public deleteByProduiteur(produiteur : string):Observable<number>{
		return this._http.delete<number>(environment.url +'commande/produiteur/' + produiteur);
	}
	 public deleteByCategorie(categorie : string):Observable<number>{
		return this._http.delete<number>(environment.url +'commande/categorie/' + categorie);
	}
	 get commande(): Commande {
		if (this._commande == null){
			this._commande= new Commande();
		}
		return this._commande;
	}

	 set commande(value : Commande) {
		this._commande= value;
	}

	 get commandeList(): Array<Commande> {
		if (this._commandeList == null){
			this._commandeList= new Array<Commande>();
		}
		return this._commandeList;
	}

	 set commandeList(value : Array<Commande>) {
		this._commandeList= value;
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
