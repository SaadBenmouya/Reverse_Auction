import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../../../controller/service/notification.service";
import {Notification} from "../../../../controller/model/notification.model";

@Component({
	selector: 'app-notification-create-admin',
	templateUrl: './notification-create-admin.component.html',
	styleUrls: ['./notification-create-admin.component.css']
})
export class NotificationCreateAdminComponent implements  OnInit{

	ngOnInit(): void {
	}

	constructor(private notificationService : NotificationService) {
	}

	 get notification(): Notification { 
		return this.notificationService.notification;
	}

	 set notification(value : Notification) { 
		this.notificationService.notification= value;
	}

	 get notificationList(): Array<Notification> { 
		return this.notificationService.notificationList;
	}

	 set notificationList(value : Array<Notification>) { 
		this.notificationService.notificationList= value;
	}

}