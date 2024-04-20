import {Component, OnInit} from '@angular/core';
import {NotificationService} from "../../../../controller/service/notification.service";
import {Notification} from "../../../../controller/model/notification.model";


@Component({
	selector: 'app-notification-list-admin',
	templateUrl: './notification-list-admin.component.html',
	styleUrls: ['./notification-list-admin.component.css']
})
export class NotificationListAdminComponent implements  OnInit{
    selectedProducts: any | boolean;

	ngOnInit(): void {
	this.findAll();
	}

	constructor(private notificationService : NotificationService) {
	}

	 public findAll() {
		return this.notificationService.findAll().subscribe(data => this.notificationList= data);
	}
	 public deleteById(id:number,index:number) {
		return this.notificationService.deleteById(id).subscribe(data => {
            if (data != null) {
                this.notificationList.splice( index,1);
            } else {
                alert('DEL ERROR')
            }
        });

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

    openNew() {

    }

    deleteSelectedProducts() {

    }


}
