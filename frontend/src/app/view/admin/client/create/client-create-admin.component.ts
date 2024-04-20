import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../../controller/service/client.service";
import {Client} from "../../../../controller/model/client.model";

@Component({
	selector: 'app-client-create-admin',
	templateUrl: './client-create-admin.component.html',
	styleUrls: ['./client-create-admin.component.css']
})
export class ClientCreateAdminComponent implements  OnInit{

	ngOnInit(): void {
	}

	constructor(private clientService : ClientService) {
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