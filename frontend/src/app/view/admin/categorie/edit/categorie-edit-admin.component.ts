import { Component, OnInit } from '@angular/core';
import { CategorieService } from "../../../../controller/service/categorie.service";
import { Categorie } from "../../../../controller/model/categorie.model";

import { MessageService } from "primeng/api";

import { FournisseurService } from "../../../../controller/service/fournisseur.service";
import { Fournisseur } from "../../../../controller/model/fournisseur.model";

@Component({
  selector: 'app-categorie-edit-admin',
  templateUrl: './categorie-edit-admin.component.html',
  styleUrls: ['./categorie-edit-admin.component.css']
})
export class CategorieEditAdminComponent implements OnInit {

  private _fournisseurs: Array<Fournisseur> = [];

  private _submitted = false;
    editDialog: boolean;

  ngOnInit(): void {
  }

  constructor(
    private categorieService: CategorieService,
    private fournisseurService: FournisseurService,
    private messageService: MessageService
  ) { }

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
    this.categorieService.update(this.categorie).subscribe(data => {
      const index = this.categorieList.findIndex(e => e.id === this.categorie.id);
      this.categorieList[index] = data;
      this.isEditDialog = false;
      this.submitted = false;
      this.messageService.add({
        severity: 'success',
        summary: 'Update Successfully',
        detail: 'La modification a bien passée'
      });
      this.categorie = new Categorie();
    }, error => {
      console.log(error);
    });
  }

  public validateForm(): void {
    this.errorMessages = [];
  }

  public prepareEdit() {
    // Implement the logic if needed
  }

  public hideEditDialog() {
    this.isEditDialog = false;
    this.setValidation(true);
  }

  public setValidation(value: boolean) {
    // Implement the logic if needed
  }

  get categorie(): Categorie {
    return this.categorieService.categorie;
  }

  set categorie(value: Categorie) {
    this.categorieService.categorie = value;
  }

  get categorieList(): Array<Categorie> {
    return this.categorieService.categorieList;
  }

  set categorieList(value: Array<Categorie>) {
    this.categorieService.categorieList = value;
  }

  get fournisseurs(): Array<Fournisseur> {
    return this._fournisseurs;
  }

  set fournisseurs(value: Array<Fournisseur>) {
    this._fournisseurs = value;
  }

  get errorMessages(): string[] {
    return this.categorieService._errorMessages;
  }

  set errorMessages(value: string[]) {
    this.categorieService._errorMessages = value;
  }

  get submitted(): boolean {
    return this._submitted;
  }

  set submitted(value: boolean) {
    this._submitted = value;
  }

  get isEditDialog(): boolean {
    return this.categorieService.isEditDialog();
  }

  set isEditDialog(value: boolean) {
    this.categorieService.setEditDialog(value);
  }

}
