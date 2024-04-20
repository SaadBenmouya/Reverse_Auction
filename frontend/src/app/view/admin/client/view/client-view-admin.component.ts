import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../../../controller/service/client.service";
import {Client} from "../../../../controller/model/client.model";

@Component({
	selector: 'app-client-view-admin',
	templateUrl: './client-view-admin.component.html',
	styleUrls: ['./client-view-admin.component.css']
})
export class ClientViewAdminComponent implements  OnInit{

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