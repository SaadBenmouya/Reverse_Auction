import { Injectable } from "@angular/core";
import { HttpBackend, HttpClient, HttpHandler } from "@angular/common/http";
import { Router, ActivatedRoute } from "@angular/router";
import { map, catchError, delay } from "rxjs/operators";
import { of, BehaviorSubject, throwError, Observable } from "rxjs";

import {TokenStorageService} from "../_services/token-storage.service";
import {JwtHelperService} from "@auth0/angular-jwt";



@Injectable({
  providedIn: "root",
})
export class JwtAuthService {

    helper = new JwtHelperService();


    token;
    return: string;

    roles: string[] = [];
    private http: HttpClient;

    constructor(
        private tokenStorage: TokenStorageService,
        private router: Router,
        private route: ActivatedRoute,
        handler: HttpBackend
    ) {
        this.route.queryParams
            .subscribe(params => this.return = params['return'] || '/');
        this.http = new HttpClient(handler);
    }









    IsLoggedIn() {
        let token = this.tokenStorage.getToken()
        if (!token) {
            return false
        }
        if (this.helper.isTokenExpired(token)) {
            return false
        }
        return true
    }

    IsLoggedIn_USER() {
        this.roles = this.tokenStorage.getUser().roles;

        if (!this.roles || this.roles.length === 0) {
            return false;
        }

        const isAdminOrUser =  this.roles.includes('ROLE_USER');

        if (!isAdminOrUser) {
            return false;
        }

        const token = this.tokenStorage.getToken();

        if (!token || this.helper.isTokenExpired(token)) {
            return false;
        }

        return true;
    }

    IsLoggedIn_ADMIN() {
        this.roles = this.tokenStorage.getUser().roles;


        if (!this.roles || this.roles.length === 0) {
            return false;
        }

        const isAdminOrUser = this.roles.includes('ROLE_ADMIN') ;

        if (!isAdminOrUser) {
            return false;
        }

        const token = this.tokenStorage.getToken();

        if (!token || this.helper.isTokenExpired(token)) {
            return false;
        }

        return true;
    }


    IsLoggedIn_ADMIN_Or_USER() {
        this.roles = this.tokenStorage.getUser().roles;

        if (!this.roles || this.roles.length === 0) {
            return false;
        }

        const isAdminOrUser = this.roles.includes('ROLE_ADMIN') || this.roles.includes('ROLE_USER');

        if (!isAdminOrUser) {
            return false;
        }

        const token = this.tokenStorage.getToken();

        if (!token || this.helper.isTokenExpired(token)) {
            return false;
        }

        return true;
    }
}
