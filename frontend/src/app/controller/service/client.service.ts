import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Client} from "../model/client.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})

export class ClientService {

	 private _client !: Client ;
	 private _clientList !: Array<Client> ;

	 private _createDialog: boolean;

	 private _editDialog: boolean;

	 private _viewDialog: boolean;

	 private _errorMessages = new Array<string>();

	 constructor(private _http: HttpClient) { }

	 public save(client : Client):Observable<Client>{
		return this._http.post<Client>(environment.url +'client/' , client);
	}
	 public update(client : Client):Observable<Client>{
		return this._http.put<Client>(environment.url +'client/' ,client);
	}
	 public findAll():Observable<Array<Client>>{
		return this._http.get<Array<Client>>(environment.url +'client/');
	}
	 public findById(id : number):Observable<Client>{
		return this._http.get<Client>(environment.url +'client/id/' + id);
	}

	 public findByAdrLivraison(adrLivraison : string):Observable<Array<Client>>{
		return this._http.get<Array<Client>>(environment.url +'client/adrLivraison/' + adrLivraison);
	}
	 public deleteById(id : number):Observable<Client>{
		return this._http.delete<Client>(environment.url +'client/id/' + id);
	}

	 public deleteByAdrLivraison(adrLivraison : string):Observable<number>{
		return this._http.delete<number>(environment.url +'client/adrLivraison/' + adrLivraison);
	}
	 get client(): Client {
		if (this._client == null){
			this._client= new Client();
		}
		return this._client;
	}

	 set client(value : Client) {
		this._client= value;
	}

	 get clientList(): Array<Client> {
		if (this._clientList == null){
			this._clientList= new Array<Client>();
		}
		return this._clientList;
	}

	 set clientList(value : Array<Client>) {
		this._clientList= value;
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
