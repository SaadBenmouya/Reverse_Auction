import { RouterModule } from '@angular/router';
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
import { NgModule } from '@angular/core';

@NgModule({
    imports: [RouterModule.forChild([ { path: 'CmdGroupe-view', component:CmdGroupeViewAdminComponent},
 { path: 'CmdGroupe-list', component:CmdGroupeListAdminComponent},
 { path: 'CmdGroupe-edit', component:CmdGroupeEditAdminComponent},
 { path: 'CmdGroupe-create', component:CmdGroupeCreateAdminComponent},
 { path: 'Commentaire-view', component:CommentaireViewAdminComponent},
 { path: 'Commentaire-list', component:CommentaireListAdminComponent},
 { path: 'Commentaire-edit', component:CommentaireEditAdminComponent},
 { path: 'Commentaire-create', component:CommentaireCreateAdminComponent},
 { path: 'Offre-view', component:OffreViewAdminComponent},
 { path: 'Offre-list', component:OffreListAdminComponent},
 { path: 'Offre-edit', component:OffreEditAdminComponent},
 { path: 'Offre-create', component:OffreCreateAdminComponent},
 { path: 'Commande-view', component:CommandeViewAdminComponent},
 { path: 'Commande-list', component:CommandeListAdminComponent},
 { path: 'Commande-edit', component:CommandeEditAdminComponent},
 { path: 'Commande-create', component:CommandeCreateAdminComponent},
 { path: 'Client-view', component:ClientViewAdminComponent},
 { path: 'Client-list', component:ClientListAdminComponent},
 { path: 'Client-edit', component:ClientEditAdminComponent},
 { path: 'Client-create', component:ClientCreateAdminComponent},
 { path: 'Categorie-view', component:CategorieViewAdminComponent},
 { path: 'Categorie-list', component:CategorieListAdminComponent},
 { path: 'Categorie-edit', component:CategorieEditAdminComponent},
 { path: 'Categorie-create', component:CategorieCreateAdminComponent},
 { path: 'Fournisseur-view', component:FournisseurViewAdminComponent},
 { path: 'Fournisseur-list', component:FournisseurListAdminComponent},
 { path: 'Fournisseur-edit', component:FournisseurEditAdminComponent},
 { path: 'Fournisseur-create', component:FournisseurCreateAdminComponent},
 { path: 'Notification-view', component:NotificationViewAdminComponent},
 { path: 'Notification-list', component:NotificationListAdminComponent},
 { path: 'Notification-edit', component:NotificationEditAdminComponent},
 { path: 'Notification-create', component:NotificationCreateAdminComponent},
 { path: 'Administrateur-view', component:AdministrateurViewAdminComponent},
 { path: 'Administrateur-list', component:AdministrateurListAdminComponent},
 { path: 'Administrateur-edit', component:AdministrateurEditAdminComponent},
 { path: 'Administrateur-create', component:AdministrateurCreateAdminComponent},

        //{ path: 'address', component: AddressListAdminComponent },

        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
