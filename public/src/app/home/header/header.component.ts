import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _userService:UserService, private _noteService:NoteService) { }

  ngOnInit() {
  }

  @Output() newNote = new EventEmitter<boolean>();
  createNote:boolean = false;

  note() {
    this.createNote = true;
    this.newNote.emit(this.createNote);
  }

  logoutUser() {
    this._userService.logoutUser();
  }

}
