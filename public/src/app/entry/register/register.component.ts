import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _userService:UserService) { }

  ngOnInit() {}

  user:User = new User;

  createUser() {
    this._userService.createUser(this.user)
    .then(data => console.log('Create-then data: ', data))
    .catch(data => console.log('Create-catch data:', data))
    this.user = new User;
  }

}
