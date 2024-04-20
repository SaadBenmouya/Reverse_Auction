import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const USER_ROLE_KEY = 'auth-role';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  signOut(): void {
    window.sessionStorage.clear();
  }




  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);

    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

  public saveUserRole(roles: string[]): void {
    window.sessionStorage.removeItem(USER_ROLE_KEY);
    window.sessionStorage.setItem(USER_ROLE_KEY, JSON.stringify(roles));
  }

  public getUserRoles(): string[] {
    const roles = window.sessionStorage.getItem(USER_ROLE_KEY);

    if (roles) {
      return JSON.parse(roles);
    }

    return [];
  }
}
