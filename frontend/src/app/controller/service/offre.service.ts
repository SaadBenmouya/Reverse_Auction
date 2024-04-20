import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Offre} from "../model/offre.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})

export class OffreService {

	 private _offre !: Offre ;
	 private _offreList !: Array<Offre> ;

	 private _createDialog: boolean;

	 private _editDialog: boolean;

	 private _viewDialog: boolean;

	 private _errorMessages = new Array<string>();

	 constructor(private _http: HttpClient) { }

	 public save(offre : Offre):Observable<Offre>{ 
		return this._http.post<Offre>(environment.url +'offre/' , offre);
	}
	 public update(offre : Offre):Observable<Offre>{ 
		return this._http.put<Offre>(environment.url +'offre/' ,offre);
	}
	 public findAll():Observable<Array<Offre>>{ 
		return this._http.get<Array<Offre>>(environment.url +'offre/');
	}
	 public findById(id : number):Observable<Offre>{ 
		return this._http.get<Offre>(environment.url +'offre/id/' + id);
	}
	 public findByPrix(prix : number):Observable<Array<Offre>>{ 
		return this._http.get<Array<Offre>>(environment.url +'offre/prix/' + prix);
	}
	 public findByNbrClient(nbrClient : number):Observable<Array<Offre>>{ 
		return this._http.get<Array<Offre>>(environment.url +'offre/nbrClient/' + nbrClient);
	}
	 public deleteById(id : number):Observable<Offre>{ 
		return this._http.delete<Offre>(environment.url +'offre/id/' + id);
	}
	 public deleteByPrix(prix : number):Observable<number>{ 
		return this._http.delete<number>(environment.url +'offre/prix/' + prix);
	}
	 public deleteByNbrClient(nbrClient : number):Observable<number>{ 
		return this._http.delete<number>(environment.url +'offre/nbrClient/' + nbrClient);
	}
	 get offre(): Offre { 
		if (this._offre == null){
			this._offre= new Offre();
		}
		return this._offre;
	}

	 set offre(value : Offre) { 
		this._offre= value;
	}

	 get offreList(): Array<Offre> { 
		if (this._offreList == null){
			this._offreList= new Array<Offre>();
		}
		return this._offreList;
	}

	 set offreList(value : Array<Offre>) { 
		this._offreList= value;
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