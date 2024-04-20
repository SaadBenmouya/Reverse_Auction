import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../../../controller/service/notification.service";
import {Notification} from "../../../../controller/model/notification.model";

@Component({
	selector: 'app-notification-view-admin',
	templateUrl: './notification-view-admin.component.html',
	styleUrls: ['./notification-view-admin.component.css']
})
export class NotificationViewAdminComponent implements  OnInit{

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