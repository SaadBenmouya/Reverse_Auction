import { NgModule } from '@angular/core';
import {CommonModule, HashLocationStrategy, LocationStrategy} from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {AppComponent} from "../../app.component";
import {NotfoundComponent} from "../../demo/components/notfound/notfound.component";
import {AppLayoutModule} from "../../layout/app.layout.module";
import {CountryService} from "../../demo/service/country.service";
import {CustomerService} from "../../demo/service/customer.service";
import {EventService} from "../../demo/service/event.service";
import {IconService} from "../../demo/service/icon.service";
import {NodeService} from "../../demo/service/node.service";
import {PhotoService} from "../../demo/service/photo.service";
import {ProductService} from "../../demo/service/product.service";

import {TableModule} from "primeng/table";
import {FileUploadModule} from "primeng/fileupload";
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {RatingModule} from "primeng/rating";
import {InputTextModule} from "primeng/inputtext";
import {InputTextareaModule} from "primeng/inputtextarea";
import {DropdownModule} from "primeng/dropdown";
import {RadioButtonModule} from "primeng/radiobutton";
import {InputNumberModule} from "primeng/inputnumber";
import {DialogModule} from "primeng/dialog";
import { AdministrateurCreateAdminComponent } from './administrateur/create/administrateur-create-admin.component';
import { AdministrateurEditAdminComponent } from './administrateur/edit/administrateur-edit-admin.component';
import { AdministrateurListAdminComponent } from './administrateur/list/administrateur-list-admin.component';
import { AdministrateurViewAdminComponent } from './administrateur/view/administrateur-view-admin.component';
import { NotificationCreateAdminComponent } from './notification/create/notification-create-admin.component';
import { NotificationEditAdminComponent } from './notification/edit/notification-edit-admin.component';
import { NotificationListAdminComponent } from './notification/list/notification-list-admin.component';
import { NotificationViewAdminComponent } from './notification/view/notification-view-admin.component';
import { FournisseurCreateAdminComponent } from './fournisseur/create/fournisseur-create-admin.component';
import { FournisseurEditAdminComponent } from './fournisseur/edit/fournisseur-edit-admin.component';
import { FournisseurListAdminComponent } from './fournisseur/list/fournisseur-list-admin.component';
import { FournisseurViewAdminComponent } from './fournisseur/view/fournisseur-view-admin.component';
import { CategorieCreateAdminComponent } from './categorie/create/categorie-create-admin.component';
import { CategorieEditAdminComponent } from './categorie/edit/categorie-edit-admin.component';
import { CategorieListAdminComponent } from './categorie/list/categorie-list-admin.component';
import { CategorieViewAdminComponent } from './categorie/view/categorie-view-admin.component';
import { ClientCreateAdminComponent } from './client/create/client-create-admin.component';
import { ClientEditAdminComponent } from './client/edit/client-edit-admin.component';
import { ClientListAdminComponent } from './client/list/client-list-admin.component';
import { ClientViewAdminComponent } from './client/view/client-view-admin.component';
import { CommandeCreateAdminComponent } from './commande/create/commande-create-admin.component';
import { CommandeEditAdminComponent } from './commande/edit/commande-edit-admin.component';
import { CommandeListAdminComponent } from './commande/list/commande-list-admin.component';
import { CommandeViewAdminComponent } from './commande/view/commande-view-admin.component';
import { OffreCreateAdminComponent } from './offre/create/offre-create-admin.component';
import { OffreEditAdminComponent } from './offre/edit/offre-edit-admin.component';
import { OffreListAdminComponent } from './offre/list/offre-list-admin.component';
import { OffreViewAdminComponent } from './offre/view/offre-view-admin.component';
import { CommentaireCreateAdminComponent } from './commentaire/create/commentaire-create-admin.component';
import { CommentaireEditAdminComponent } from './commentaire/edit/commentaire-edit-admin.component';
import { CommentaireListAdminComponent } from './commentaire/list/commentaire-list-admin.component';
import { CommentaireViewAdminComponent } from './commentaire/view/commentaire-view-admin.component';
import { CmdGroupeCreateAdminComponent } from './cmd-groupe/create/cmd-groupe-create-admin.component';
import { CmdGroupeEditAdminComponent } from './cmd-groupe/edit/cmd-groupe-edit-admin.component';
import { CmdGroupeListAdminComponent } from './cmd-groupe/list/cmd-groupe-list-admin.component';
import { CmdGroupeViewAdminComponent } from './cmd-groupe/view/cmd-groupe-view-admin.component';
import {HttpClientModule} from "@angular/common/http";
import {TabViewModule} from "primeng/tabview";
import {CalendarModule} from "primeng/calendar";
import {MultiSelectModule} from "primeng/multiselect";

@NgModule({
    declarations: [ CmdGroupeViewAdminComponent,
 CmdGroupeListAdminComponent,
 CmdGroupeEditAdminComponent,
 CmdGroupeCreateAdminComponent,
 CommentaireViewAdminComponent,
 CommentaireListAdminComponent,
 CommentaireEditAdminComponent,
 CommentaireCreateAdminComponent,
 OffreViewAdminComponent,
 OffreListAdminComponent,
 OffreEditAdminComponent,
 OffreCreateAdminComponent,
 CommandeViewAdminComponent,
 CommandeListAdminComponent,
 CommandeEditAdminComponent,
 CommandeCreateAdminComponent,
 ClientViewAdminComponent,
 ClientListAdminComponent,
 ClientEditAdminComponent,
 ClientCreateAdminComponent,
 CategorieViewAdminComponent,
 CategorieListAdminComponent,
 CategorieEditAdminComponent,
 CategorieCreateAdminComponent,
 FournisseurViewAdminComponent,
 FournisseurListAdminComponent,
 FournisseurEditAdminComponent,
 FournisseurCreateAdminComponent,
 NotificationViewAdminComponent,
 NotificationListAdminComponent,
 NotificationEditAdminComponent,
 NotificationCreateAdminComponent,
 AdministrateurViewAdminComponent,
 AdministrateurListAdminComponent,
 AdministrateurEditAdminComponent,
 AdministrateurCreateAdminComponent,



    ],
    imports: [

        CommonModule,
        AdminRoutingModule,
        CommonModule,
        TableModule,
        FileUploadModule,
        FormsModule,
        ButtonModule,
        RippleModule,
        ToastModule,
        ToolbarModule,
        RatingModule,
        InputTextModule,
        InputTextareaModule,
        DropdownModule,
        RadioButtonModule,
        InputNumberModule,
        DialogModule,
        HttpClientModule,
        TabViewModule,
        CalendarModule,
        MultiSelectModule
    ]
})
export class AdminModule { }
