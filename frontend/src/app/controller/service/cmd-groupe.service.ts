import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CmdGroupe} from "../model/cmd-groupe.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
	providedIn: 'root'
})

export class CmdGroupeService {

	 private _cmdGroupe !: CmdGroupe ;
	 private _cmdGroupeList !: Array<CmdGroupe> ;

	 private _createDialog: boolean;

	 _editDialog: boolean;

	 private _viewDialog: boolean;

	 _errorMessages = new Array<string>();

	 constructor(private _http: HttpClient) { }

	 public save(cmdGroupe : CmdGroupe):Observable<CmdGroupe>{
		return this._http.post<CmdGroupe>(environment.url +'cmdGroupe/' , cmdGroupe);
	}
	 public update(cmdGroupe : CmdGroupe):Observable<CmdGroupe>{
		return this._http.put<CmdGroupe>(environment.url +'cmdGroupe/' ,cmdGroupe);
	}
	 public findAll():Observable<Array<CmdGroupe>>{
		return this._http.get<Array<CmdGroupe>>(environment.url +'cmdGroupe/');
	}
	 public findById(id : number):Observable<CmdGroupe>{
		return this._http.get<CmdGroupe>(environment.url +'cmdGroupe/id/' + id);
	}
	 public findByPrixPsychologiquesDuree(prixPsychologiquesDuree : string):Observable<Array<CmdGroupe>>{
		return this._http.get<Array<CmdGroupe>>(environment.url +'cmdGroupe/prixPsychologiquesDuree/' + prixPsychologiquesDuree);
	}
	 public deleteById(id : number):Observable<CmdGroupe>{
		return this._http.delete<CmdGroupe>(environment.url +'cmdGroupe/id/' + id);
	}
	 public deleteByPrixPsychologiquesDuree(prixPsychologiquesDuree : string):Observable<number>{
		return this._http.delete<number>(environment.url +'cmdGroupe/prixPsychologiquesDuree/' + prixPsychologiquesDuree);
	}
	 get cmdGroupe(): CmdGroupe {
		if (this._cmdGroupe == null){
			this._cmdGroupe= new CmdGroupe();
		}
		return this._cmdGroupe;
	}

	 set cmdGroupe(value : CmdGroupe) {
		this._cmdGroupe= value;
	}

	 get cmdGroupeList(): Array<CmdGroupe> {
		if (this._cmdGroupeList == null){
			this._cmdGroupeList= new Array<CmdGroupe>();
		}
		return this._cmdGroupeList;
	}

	 set cmdGroupeList(value : Array<CmdGroupe>) {
		this._cmdGroupeList= value;
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
