import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import {LoginRoutingModule} from "./login/login-routing.module";
import {ButtonModule} from "primeng/button";
import {CheckboxModule} from "primeng/checkbox";
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {PasswordModule} from "primeng/password";

@NgModule({
    imports: [
        CommonModule,
        AuthRoutingModule,


    ],
    declarations: [

    ]
})
export class AuthModule { }
