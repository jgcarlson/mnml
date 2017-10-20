import { Component, OnInit, OnDestroy } from '@angular/core';
import { Note } from './../../../models/note';
import { NoteService } from './../../../services/note.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

  constructor(private _noteService:NoteService) { }

  ngOnInit() {
    console.log(this.token)
  }

  token:any = localStorage.getItem('user');

  note:Note = new Note();

  updateNote() {
    console.log('token: ' + this.token)
    if (this.note.content == '') return false;
    this.note.owner = this.token;
    this._noteService.updateNote(this.note)
    .then(data => console.log(data))
    .catch(data => console.log('Login-catch data:', data));
  }

  ngOnDestroy() {
    this.updateNote();
  }

}
