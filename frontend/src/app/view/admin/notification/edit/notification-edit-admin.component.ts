import { Component, OnInit } from '@angular/core';
import { NotificationService } from "../../../../controller/service/notification.service";
import { Notification } from "../../../../controller/model/notification.model";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-notification-edit-admin',
  templateUrl: './notification-edit-admin.component.html',
  styleUrls: ['./notification-edit-admin.component.css']
})
export class NotificationEditAdminComponent implements OnInit {

  private _submitted = false;
  editDialog: boolean;

  ngOnInit(): void {
  }

  constructor(private notificationService: NotificationService, private messageService: MessageService) {
  }

  public edit(): void {
    this.prepareEdit();
    this.validateForm();
    if (this.errorMessages.length === 0) {
      this.editWithShowOption(false);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erreurs',
        detail: 'Merci de corriger les erreurs sur le formulaire'
      });
    }
  }

  public editWithShowOption(showList: boolean): void {
    this.notificationService.update(this.notification).subscribe(
      data => {
        const index = this.notificationList.findIndex(e => e.id === this.notification.id);
        this.notificationList[index] = data;
        this.editDialog = false;
        this.submitted = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Update Successfully',
          detail: 'La modification a bien passée'
        });
        this.notification = new Notification();
      },
      error => {
        console.log(error);
      }
    );
  }

  public validateForm(): void {
    this.errorMessages = [];
  }

  public prepareEdit(): void {
    // Implement your preparation logic here if needed.
  }

  public hideEditDialog(): void {
    this.editDialog = false;
    this.setValidation(true);
  }

  public setValidation(value: boolean): void {
    // Implement your validation logic here if needed.
  }

  get notification(): Notification {
    return this.notificationService.notification;
  }

  set notification(value: Notification) {
    this.notificationService.notification = value;
  }

  get notificationList(): Array<Notification> {
    return this.notificationService.notificationList;
  }

  set notificationList(value: Array<Notification>) {
    this.notificationService.notificationList = value;
  }

  get errorMessages(): string[] {
    return this.notificationService.getErrorMessages();
  }

  set errorMessages(value: string[]) {
    this.notificationService.setErrorMessages(value);
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  public isEditDialog(): boolean {
    return this.notificationService.isEditDialog();
  }

  public setEditDialog(value: boolean): void {
    this.notificationService.setEditDialog(value);
  }

}
