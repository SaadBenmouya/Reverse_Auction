import { Component, OnInit } from '@angular/core';
import { ClientService } from "../../../../controller/service/client.service";
import { Client } from "../../../../controller/model/client.model";
import { MessageService } from "primeng/api";
import { User } from "../../../../controller/model/user.model"; // Import User model

@Component({
  selector: 'app-client-edit-admin',
  templateUrl: './client-edit-admin.component.html',
  styleUrls: ['./client-edit-admin.component.css']
})
export class ClientEditAdminComponent implements OnInit {

  private _extendss: Array<User> = [];
  private _submitted = false;
  editDialog: boolean;

  ngOnInit(): void {
  }

  constructor(private clientService: ClientService, private messageService: MessageService) {
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
    this.clientService.update(this.client).subscribe(
      data => {
        const index = this.clientList.findIndex(e => e.id === this.client.id);
        this.clientList[index] = data;
        this.editDialog = false;
        this.submitted = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Update Successfully',
          detail: 'La modification a bien passée'
        });
        this.client = new Client();
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

  get client(): Client {
    return this.clientService.client;
  }

  set client(value: Client) {
    this.clientService.client = value;
  }

  get clientList(): Array<Client> {
    return this.clientService.clientList;
  }

  set clientList(value: Array<Client>) {
    this.clientService.clientList = value;
  }

  get extendss(): Array<User> {
    return this._extendss;
  }

  set extendss(value: Array<User>) {
    this._extendss = value;
  }

  get errorMessages(): string[] {
    return this.clientService.getErrorMessages();
  }

  set errorMessages(value: string[]) {
    this.clientService.setErrorMessages(value);
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  public isEditDialog(): boolean {
    return this.clientService.isEditDialog();
  }

  public setEditDialog(value: boolean): void {
    this.clientService.setEditDialog(value);
  }

}
