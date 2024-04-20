import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import {UserOrAdminGuard} from "../../../guards/user-or-admin.guard";

@NgModule({
    imports: [RouterModule.forChild([
        { path: '',canActivateChild:[UserOrAdminGuard], component: DashboardComponent }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
