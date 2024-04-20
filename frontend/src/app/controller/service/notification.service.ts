import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Notification} from "../model/notification.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})

export class NotificationService {

	 private _notification !: Notification ;
	 private _notificationList !: Array<Notification> ;

	 private _createDialog: boolean;

	 private _editDialog: boolean;

	 private _viewDialog: boolean;

	 private _errorMessages = new Array<string>();

	 constructor(private _http: HttpClient) { }

	 public save(notification : Notification):Observable<Notification>{ 
		return this._http.post<Notification>(environment.url +'notification/' , notification);
	}
	 public update(notification : Notification):Observable<Notification>{ 
		return this._http.put<Notification>(environment.url +'notification/' ,notification);
	}
	 public findAll():Observable<Array<Notification>>{ 
		return this._http.get<Array<Notification>>(environment.url +'notification/');
	}
	 public findById(id : number):Observable<Notification>{ 
		return this._http.get<Notification>(environment.url +'notification/id/' + id);
	}
	 public findByObjet(objet : string):Observable<Array<Notification>>{ 
		return this._http.get<Array<Notification>>(environment.url +'notification/objet/' + objet);
	}
	 public findByContenu(contenu : string):Observable<Array<Notification>>{ 
		return this._http.get<Array<Notification>>(environment.url +'notification/contenu/' + contenu);
	}
	 public findByDateEnvoie(dateEnvoie : Date):Observable<Array<Notification>>{ 
		return this._http.get<Array<Notification>>(environment.url +'notification/dateEnvoie/' + dateEnvoie);
	}
	 public findByDateReçoit(dateReçoit : Date):Observable<Array<Notification>>{ 
		return this._http.get<Array<Notification>>(environment.url +'notification/dateReçoit/' + dateReçoit);
	}
	 public deleteById(id : number):Observable<Notification>{ 
		return this._http.delete<Notification>(environment.url +'notification/id/' + id);
	}
	 public deleteByObjet(objet : string):Observable<number>{ 
		return this._http.delete<number>(environment.url +'notification/objet/' + objet);
	}
	 public deleteByContenu(contenu : string):Observable<number>{ 
		return this._http.delete<number>(environment.url +'notification/contenu/' + contenu);
	}
	 public deleteByDateEnvoie(dateEnvoie : Date):Observable<number>{ 
		return this._http.delete<number>(environment.url +'notification/dateEnvoie/' + dateEnvoie);
	}
	 public deleteByDateReçoit(dateReçoit : Date):Observable<number>{ 
		return this._http.delete<number>(environment.url +'notification/dateReçoit/' + dateReçoit);
	}
	 get notification(): Notification { 
		if (this._notification == null){
			this._notification= new Notification();
		}
		return this._notification;
	}

	 set notification(value : Notification) { 
		this._notification= value;
	}

	 get notificationList(): Array<Notification> { 
		if (this._notificationList == null){
			this._notificationList= new Array<Notification>();
		}
		return this._notificationList;
	}

	 set notificationList(value : Array<Notification>) { 
		this._notificationList= value;
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