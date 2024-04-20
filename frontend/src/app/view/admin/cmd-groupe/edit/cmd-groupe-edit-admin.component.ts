import { Component, OnInit } from '@angular/core';
import { CmdGroupeService } from '../../../../controller/service/cmd-groupe.service';
import { CmdGroupe } from '../../../../controller/model/cmd-groupe.model';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cmd-groupe-edit-admin',
  templateUrl: './cmd-groupe-edit-admin.component.html',
  styleUrls: ['./cmd-groupe-edit-admin.component.css']
})
export class CmdGroupeEditAdminComponent implements OnInit {

  private _submitted = false;

  constructor(private cmdGroupeService: CmdGroupeService, private messageService: MessageService) {}

  ngOnInit(): void {}

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
    this.cmdGroupeService.update(this.cmdGroupe).subscribe(
      (data) => {
        const index = this.cmdGroupeList.findIndex((e) => e.id === this.cmdGroupe.id);
        this.cmdGroupeList[index] = data;
        this.editDialog = false;
        this.submitted = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Update Successfully',
          detail: 'La modification a bien passé'
        });
        this.cmdGroupe = new CmdGroupe();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  public validateForm(): void {
    this.errorMessages = [];
  }

  public prepareEdit(): void {}

  public hideEditDialog(): void {
    this.editDialog = false;
    this.setValidation(true);
  }

  public setValidation(value: boolean): void {}

  get cmdGroupe(): CmdGroupe {
    return this.cmdGroupeService.cmdGroupe;
  }

  set cmdGroupe(value: CmdGroupe) {
    this.cmdGroupeService.cmdGroupe = value;
  }

  get cmdGroupeList(): Array<CmdGroupe> {
    return this.cmdGroupeService.cmdGroupeList;
  }

  set cmdGroupeList(value: Array<CmdGroupe>) {
    this.cmdGroupeService.cmdGroupeList = value;
  }

  get errorMessages(): string[] {
    return this.cmdGroupeService._errorMessages;
  }

  set errorMessages(value: string[]) {
    this.cmdGroupeService._errorMessages = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get editDialog(): boolean {
    return this.cmdGroupeService._editDialog;
  }

  set editDialog(value: boolean) {
    this.cmdGroupeService._editDialog = value;
  }

}
