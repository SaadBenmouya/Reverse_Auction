import {Component, OnInit} from '@angular/core';
import {CmdGroupeService} from "../../../../controller/service/cmd-groupe.service";
import {CmdGroupe} from "../../../../controller/model/cmd-groupe.model";

@Component({
	selector: 'app-cmd-groupe-list-admin',
	templateUrl: './cmd-groupe-list-admin.component.html',
	styleUrls: ['./cmd-groupe-list-admin.component.css']
})
export class CmdGroupeListAdminComponent implements  OnInit{

	ngOnInit(): void {
	this.findAll();
	}

	constructor(private cmdGroupeService : CmdGroupeService) {
	}

	 public findAll() { 
		return this.cmdGroupeService.findAll().subscribe(data => this.cmdGroupeList= data);
	}
	 public deleteById(id:number,index:number) { 
		return this.cmdGroupeService.deleteById(id).subscribe(data => {
            if (data != null) {
                this.cmdGroupeList.splice( index,1);
            } else {
                alert('DEL ERROR')
            }
        });

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