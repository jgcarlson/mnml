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
  }

  note:Note = new Note();

  updateNote() {
    this._noteService.updateNote(this.note);
  }

  ngOnDestroy() {
    this.updateNote();
  }

}
