import { Component, OnInit } from '@angular/core';
import { AdministrateurService } from '../../../../controller/service/administrateur.service';
import { Administrateur } from '../../../../controller/model/administrateur.model';
import { MessageService } from 'primeng/api';
import { User } from '../../../../controller/model/user.model';

@Component({
  selector: 'app-administrateur-edit-admin',
  templateUrl: './administrateur-edit-admin.component.html',
  styleUrls: ['./administrateur-edit-admin.component.css']
})
export class AdministrateurEditAdminComponent implements OnInit {

  private _submitted = false;
  editDialog: boolean;

  constructor(
    private administrateurService: AdministrateurService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void { }

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
    this.administrateurService.update(this.administrateur).subscribe(
      data => {
        const index = this.administrateurList.findIndex(e => e.id === this.administrateur.id);
        this.administrateurList[index] = data;
        this.editDialog = false;
        this.submitted = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Update Successfully',
          detail: 'La modification a bien passée'
        });
        this.administrateur = new Administrateur();
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
    // You can add your preparation logic here if needed.
  }

  public hideEditDialog(): void {
    this.editDialog = false;
    this.setValidation(true);
  }

  public setValidation(value: boolean): void {
    // Implement your validation logic here if needed.
  }

  get administrateur(): Administrateur {
    return this.administrateurService.administrateur;
  }

  set administrateur(value: Administrateur) {
    this.administrateurService.administrateur = value;
  }

  get administrateurList(): Array<Administrateur> {
    return this.administrateurService.administrateurList;
  }

  set administrateurList(value: Array<Administrateur>) {
    this.administrateurService.administrateurList = value;
  }

  get errorMessages(): string[] {
    return this.administrateurService.getErrorMessages();
  }

  set errorMessages(value: string[]) {
    this.administrateurService.setErrorMessages(value);
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  public isEditDialog(): boolean {
    return this.administrateurService.isEditDialog();
  }

  public setEditDialog(value: boolean): void {
    this.administrateurService.setEditDialog(value);
  }

}
