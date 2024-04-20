import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../../controller/service/client.service";
import {Client} from "../../../../controller/model/client.model";

@Component({
	selector: 'app-client-list-admin',
	templateUrl: './client-list-admin.component.html',
	styleUrls: ['./client-list-admin.component.css']
})
export class ClientListAdminComponent implements  OnInit{

	ngOnInit(): void {
	this.findAll();
	}

	constructor(private clientService : ClientService) {
	}

	 public findAll() { 
		return this.clientService.findAll().subscribe(data => this.clientList= data);
	}
	 public deleteById(id:number,index:number) { 
		return this.clientService.deleteById(id).subscribe(data => {
            if (data != null) {
                this.clientList.splice( index,1);
            } else {
                alert('DEL ERROR')
            }
        });

	}
	 get client(): Client { 
		return this.clientService.client;
	}

	 set client(value : Client) { 
		this.clientService.client= value;
	}

	 get clientList(): Array<Client> { 
		return this.clientService.clientList;
	}

	 set clientList(value : Array<Client>) { 
		this.clientService.clientList= value;
	}

}