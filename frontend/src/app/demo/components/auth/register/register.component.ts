import { Component } from '@angular/core';
import {AuthService} from "../../../../_services/auth.service";
import {TokenStorageService} from "../../../../_services/token-storage.service";
import {LayoutService} from "../../../../layout/service/app.layout.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class RegisterComponent {
    valCheck: string[] = ['remember'];

    password!: string;




    isLoggedIn = false;
    isLoginFailed = false;
    errorMessage = '';
    roles: string[] = [];

    constructor(private authService: AuthService, private tokenStorage: TokenStorageService,public layoutService: LayoutService) { }
    form: any = {
        username: null,
        email: null,
        password: null
    };
    isSuccessful = false;
    isSignUpFailed = false;


    ngOnInit(): void {
    }

    onSubmit(): void {
        const { username, email, password } = this.form;

        this.authService.register(username, email, password).subscribe({
            next: data => {
                console.log(data);
                this.isSuccessful = true;
                this.isSignUpFailed = false;
            },
            error: err => {
                this.errorMessage = err.error.message;
                this.isSignUpFailed = true;
            }
        });
    }


}
