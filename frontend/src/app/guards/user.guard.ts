import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {JwtAuthService} from "../auth/jwt-auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate,CanActivateChild {
  constructor(private userService:JwtAuthService,private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return new  Promise((resolve,reject)=>{
      if(this.userService.IsLoggedIn_USER()==true){
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
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new  Promise((resolve,reject)=>{
      if(this.userService.IsLoggedIn_USER()==true){
        resolve(true)
      }
      else{
        this.router.navigate(["sessions/signin"]);
        sessionStorage.removeItem("token");
        resolve(false)
      }
    })
  }
  
}
