import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {LoginService} from "./login.service";

@Injectable()
export class RouteGuardService implements CanActivate{

  constructor(private loginService: LoginService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(route.url.toString() == '') {
      if(this.loginService.getIsDoctor() == 'yes') {
        return true;
      }  else {
        this.router.navigate(['patient/treatments']);
        return false;
      }
    }

    if(route.url.toString() == 'accepted') {
      if(this.loginService.getIsDoctor() == 'yes') {
        return true;
      }  else {
        this.router.navigate(['patient/treatments']);
        return false;
      }
    }

    if(route.url.toString() == 'details') {
      if(this.loginService.getIsDoctor() == 'yes') {
        return true;
      }  else {
        this.router.navigate(['patient/treatments']);
        return false;
      }
    }

    if(route.url.toString() == 'sensor') {
      if(this.loginService.getIsDoctor() == 'no') {
        return true;
      }  else {
        this.router.navigate(['/']);
        return false;
      }
    }

    if(route.url.toString() == 'treatment') {
      if(this.loginService.getIsDoctor() == 'no') {
        return true;
      }  else {
        this.router.navigate(['/']);
        return false;
      }
    }

    if(route.url.toString() == 'patient/treatments') {
      if(this.loginService.getIsDoctor() == 'no') {
        return true;
      }  else {
        this.router.navigate(['/']);
        return false;
      }
    }
  }
}
