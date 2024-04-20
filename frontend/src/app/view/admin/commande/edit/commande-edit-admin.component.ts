import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../../../../controller/service/commande.service';
import { Commande } from '../../../../controller/model/commande.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-commande-edit-admin',
  templateUrl: './commande-edit-admin.component.html',
  styleUrls: ['./commande-edit-admin.component.css']
})
export class CommandeEditAdminComponent implements OnInit {

  private _submitted = false;

  constructor(private commandeService: CommandeService, private messageService: MessageService) {}

  ngOnInit(): void {}

  public edit(): void {
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
    this.commandeService.update(this.commande).subscribe(
      data => {
        const index = this.commandeList.findIndex(e => e.id === this.commande.id);
        this.commandeList[index] = data;
        this.submitted = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Mise à jour réussie',
          detail: 'La modification a bien passée'
        });
        this.commande = new Commande();
      },
      error => {
        console.log(error);
      }
    );
  }

  public validateForm(): void {
    this.errorMessages = [];
  }

  public hideEditDialog(): void {
    this.setEditDialog(false);
  }

  public setValidation(value: boolean): void {
    // Implement validation logic if needed
  }

  get commande(): Commande {
    return this.commandeService.commande;
  }

  set commande(value: Commande) {
    this.commandeService.commande = value;
  }

  get commandeList(): Commande[] {
    return this.commandeService.commandeList;
  }

  set commandeList(value: Commande[]) {
    this.commandeService.commandeList = value;
  }

  get errorMessages(): string[] {
    return this.commandeService._errorMessages;
  }

  set errorMessages(value: string[]) {
    this.commandeService._errorMessages = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  public isEditDialog(): boolean {
    return this.commandeService.isEditDialog();
  }

  public setEditDialog(value: boolean): void {
    this.commandeService.setEditDialog(value);
  }
}
