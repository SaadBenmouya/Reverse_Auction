import {Component, OnInit} from '@angular/core';
import {CmdGroupeService} from "../../../../controller/service/cmd-groupe.service";
import {CmdGroupe} from "../../../../controller/model/cmd-groupe.model";

@Component({
	selector: 'app-cmd-groupe-create-admin',
	templateUrl: './cmd-groupe-create-admin.component.html',
	styleUrls: ['./cmd-groupe-create-admin.component.css']
})
export class CmdGroupeCreateAdminComponent implements  OnInit{

	ngOnInit(): void {
	}

	constructor(private cmdGroupeService : CmdGroupeService) {
	}

	 get cmdGroupe(): CmdGroupe { 
		return this.cmdGroupeService.cmdGroupe;
	}

	 set cmdGroupe(value : CmdGroupe) { 
		this.cmdGroupeService.cmdGroupe= value;
	}

	 get cmdGroupeList(): Array<CmdGroupe> { 
		return this.cmdGroupeService.cmdGroupeList;
	}

	 set cmdGroupeList(value : Array<CmdGroupe>) { 
		this.cmdGroupeService.cmdGroupeList= value;
	}

}