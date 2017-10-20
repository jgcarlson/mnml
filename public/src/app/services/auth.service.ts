import { Injectable } from '@angular/core';
import { JwtHelper} from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor() { }

  jwtHelper:JwtHelper = new JwtHelper();

  getToken() {
    return this.jwtHelper.decodeToken(localStorage.getItem('user'));
  }

  expired() {
    return !this.jwtHelper.isTokenExpired(localStorage.getItem('user'));
  }

  getTokenExpirationDate() {
    return this.jwtHelper.getTokenExpirationDate(localStorage.getItem('user'));
  }

}
