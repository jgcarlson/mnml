import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userService:UserService, private router:Router) { }

  ngOnInit() {}

  user:any = {
    email: '',
    password: ''
  }

  loginUser() {
    this._userService.loginUser(this.user)
    .then(data => {
      if (data) {
        this.router.navigate(['/']);
      }
    })
    .catch(data => console.log('Login-catch data:', data))
    this.user = {
      email: '',
      password: ''
    };
  }

}
