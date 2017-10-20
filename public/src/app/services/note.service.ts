import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NoteService {

  constructor(private _http:Http) { }

  updateNote(note) {
    return this._http.post('/api/updateNote', note)
    .map(data => data.json())
    .toPromise()
  }

}
