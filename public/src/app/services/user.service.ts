import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private _http:Http, private router:Router) { }

  createUser(user) {
    return this._http.post('/api/register', user)
    .map(data => data.json())
    .toPromise()
  }

  loginUser(user) {
    return this._http.post('/api/login', user)
    .map(data => {
      let user = data.json();
      if (user && user.token) {
        localStorage.setItem('user', JSON.stringify(user));
        return true;
      }
      return false;
    })
    .toPromise()
  }

  logoutUser() {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
