import { Component, OnInit } from '@angular/core';
import { CommentaireService } from '../../../../controller/service/commentaire.service';
import { Commentaire } from '../../../../controller/model/commentaire.model';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-commentaire-edit-admin',
  templateUrl: './commentaire-edit-admin.component.html',
  styleUrls: ['./commentaire-edit-admin.component.css']
})
export class CommentaireEditAdminComponent implements OnInit {

  private _submitted = false;

  ngOnInit(): void {
  }

  constructor(private commentaireService: CommentaireService, private messageService: MessageService) {
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

  public editWithShowOption(showList: boolean) {
    this.commentaireService.update(this.commentaire).subscribe(data => {
      const index = this.commentaireList.findIndex(e => e.id === this.commentaire.id);
      this.commentaireList[index] = data;
      this.isEditDialog = false;
      this.submitted = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Update Successfully',
        detail: 'La modification a bien passée'
      });
      this.commentaire = new Commentaire();
    }, error => {
      console.log(error);
    });
  }

  public validateForm(): void {
    this.errorMessages = [];
  }

  public prepareEdit() {
    // You can add logic to prepare for edit here
  }

  public hideEditDialog() {
    this.isEditDialog = false;
    this.setValidation(true);
  }

  public setValidation(value: boolean) {
    // Logic for validation setting
  }

  get commentaire(): Commentaire {
    return this.commentaireService.commentaire;
  }

  set commentaire(value: Commentaire) {
    this.commentaireService.commentaire = value;
  }

  get commentaireList(): Array<Commentaire> {
    return this.commentaireService.commentaireList;
  }

  set commentaireList(value: Array<Commentaire>) {
    this.commentaireService.commentaireList = value;
  }

  get errorMessages(): string[] {
    return this.commentaireService.getErrorMessages();
  }

  set errorMessages(value: string[]) {
    this.commentaireService.setErrorMessages(value);
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get isEditDialog(): boolean {
    return this.commentaireService.isEditDialog();
  }

  set isEditDialog(value: boolean) {
    this.commentaireService.setEditDialog(value);
  }
}
