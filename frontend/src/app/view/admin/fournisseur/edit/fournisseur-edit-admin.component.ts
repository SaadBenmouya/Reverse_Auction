import { Component, OnInit } from '@angular/core';
import { FournisseurService } from "../../../../controller/service/fournisseur.service";
import { Fournisseur } from "../../../../controller/model/fournisseur.model";
import { MessageService } from "primeng/api";
import { CategorieService } from "../../../../controller/service/categorie.service";
import { Categorie } from "../../../../controller/model/categorie.model";

@Component({
  selector: 'app-fournisseur-edit-admin',
  templateUrl: './fournisseur-edit-admin.component.html',
  styleUrls: ['./fournisseur-edit-admin.component.css']
})
export class FournisseurEditAdminComponent implements OnInit {

  private _categories: Array<Categorie> = [];
  private _submitted = false;

  constructor(private fournisseurService: FournisseurService, private messageService: MessageService) { }

  ngOnInit(): void {
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
    this.fournisseurService.update(this.fournisseur).subscribe(data => {
      const index = this.fournisseurList.findIndex(e => e.id === this.fournisseur.id);
      this.fournisseurList[index] = data;
      this.isEditDialog = false;
      this.submitted = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Update Successfully',
        detail: 'La modification a bien passé'
      });
      this.fournisseur = new Fournisseur();
    }, error => {
      console.log(error);
    });
  }

  public validateForm(): void {
    this.errorMessages = [];
  }

  public prepareEdit() {
    // Add any preparation logic if needed
  }

  public hideEditDialog() {
    this.isEditDialog = false;
    this.setValidation(true);
  }

  public setValidation(value: boolean) {
    // Add any validation logic if needed
  }

  get fournisseur(): Fournisseur {
    return this.fournisseurService.fournisseur;
  }

  set fournisseur(value: Fournisseur) {
    this.fournisseurService.fournisseur = value;
  }

  get fournisseurList(): Array<Fournisseur> {
    return this.fournisseurService.fournisseurList;
  }

  set fournisseurList(value: Array<Fournisseur>) {
    this.fournisseurService.fournisseurList = value;
  }

  get categories(): Array<Categorie> {
    return this._categories;
  }

  set categories(value: Array<Categorie>) {
    this._categories = value;
  }

  get errorMessages(): string[] {
    return this.fournisseurService._errorMessages;
  }

  set errorMessages(value: string[]) {
    this.fournisseurService._errorMessages = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get isEditDialog(): boolean {
    return this.fournisseurService.isEditDialog();
  }

  set isEditDialog(value: boolean) {
    this.fournisseurService.setEditDialog(value);
  }
}
