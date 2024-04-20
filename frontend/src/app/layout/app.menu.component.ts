import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },


            {
                label:'Pages',icon:'pi pi-fw pi-briefcase',items:[ { label: 'CmdGroupe' , icon: 'pi pi-fw pi-bookmark' ,  routerLink: ['/view/CmdGroupe-list'] },
 { label: 'Commentaire' , icon: 'pi pi-fw pi-bookmark' ,  routerLink: ['/view/Commentaire-list'] },
 { label: 'Offre' , icon: 'pi pi-fw pi-bookmark' ,  routerLink: ['/view/Offre-list'] },
 { label: 'Commande' , icon: 'pi pi-fw pi-bookmark' ,  routerLink: ['/view/Commande-list'] },
 { label: 'Client' , icon: 'pi pi-fw pi-bookmark' ,  routerLink: ['/view/Client-list'] },
 { label: 'Categorie' , icon: 'pi pi-fw pi-bookmark' ,  routerLink: ['/view/Categorie-list'] },
 { label: 'Fournisseur' , icon: 'pi pi-fw pi-bookmark' ,  routerLink: ['/view/Fournisseur-list'] },
 { label: 'Notification' , icon: 'pi pi-fw pi-bookmark' ,  routerLink: ['/view/Notification-list'] },
 { label: 'Administrateur' , icon: 'pi pi-fw pi-bookmark' ,  routerLink: ['/view/Administrateur-list'] },

                   // { label: 'Adrress', icon: 'pi pi-fw pi-home', routerLink: ['/view/address'] },

                    {
                        label: 'Auth',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },{
                                label: 'Register',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/register']
                            },
                            {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            }
                        ]
                    },


                    {
                        label: 'Not Found',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound']
                    },

                ]
            },

        ];
    }
}
