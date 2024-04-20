import {Component, OnInit} from '@angular/core';
import {CmdGroupeService} from "../../../../controller/service/cmd-groupe.service";
import {CmdGroupe} from "../../../../controller/model/cmd-groupe.model";

@Component({
	selector: 'app-cmd-groupe-view-admin',
	templateUrl: './cmd-groupe-view-admin.component.html',
	styleUrls: ['./cmd-groupe-view-admin.component.css']
})
export class CmdGroupeViewAdminComponent implements  OnInit{

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