import { Component, OnInit } from '@angular/core';
import { OffreService } from "../../../../controller/service/offre.service";
import { Offre } from "../../../../controller/model/offre.model";
import { MessageService } from "primeng/api";

@Component({
  selector: 'app-offre-edit-admin',
  templateUrl: './offre-edit-admin.component.html',
  styleUrls: ['./offre-edit-admin.component.css']
})
export class OffreEditAdminComponent implements OnInit {

  private _submitted = false;
  editDialog: boolean;

  ngOnInit(): void {
  }

  constructor(private offreService: OffreService, private messageService: MessageService) {
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
    this.offreService.update(this.offre).subscribe(
      data => {
        const index = this.offreList.findIndex(e => e.id === this.offre.id);
        this.offreList[index] = data;
        this.editDialog = false;
        this.submitted = false;
        this.messageService.add({
          severity: 'success',
          summary: 'Update Successfully',
          detail: 'La modification a bien passée'
        });
        this.offre = new Offre();
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

  get offre(): Offre {
    return this.offreService.offre;
  }

  set offre(value: Offre) {
    this.offreService.offre = value;
  }

  get offreList(): Array<Offre> {
    return this.offreService.offreList;
  }

  set offreList(value: Array<Offre>) {
    this.offreService.offreList = value;
  }

  get errorMessages(): string[] {
    return this.offreService.getErrorMessages();
  }

  set errorMessages(value: string[]) {
    this.offreService.setErrorMessages(value);
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  public isEditDialog(): boolean {
    return this.offreService.isEditDialog();
  }

  public setEditDialog(value: boolean): void {
    this.offreService.setEditDialog(value);
  }

}
