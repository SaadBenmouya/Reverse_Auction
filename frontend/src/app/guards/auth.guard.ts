import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {JwtAuthService} from "../auth/jwt-auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private userService:JwtAuthService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new  Promise((resolve,reject)=>{
        if(this.userService.IsLoggedIn()==true){
          resolve(true)
        }
        else{
          this.router.navigate(["sessions/signin"]);
          sessionStorage.removeItem("token");
          resolve(false)
        }
      })  
}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new  Promise((resolve,reject)=>{
        if(this.userService.IsLoggedIn()==true){
          resolve(true)
        }
        else{
          this.router.navigate(["sessions/signin"]);
          sessionStorage.removeItem("token");
          resolve(false)
        }
      })  }
  
}
