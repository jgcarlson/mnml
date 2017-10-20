import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public router:Router) { }

  jwtHelper:JwtHelper = new JwtHelper();

  token:any = localStorage.getItem('user');

  canActivate() {
    if (this.token && !this.jwtHelper.isTokenExpired(this.token)) {
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }

}
