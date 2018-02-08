import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';

import {Note} from "../note";

@Injectable()
export class NoteService {
  constructor(private http: Http) {
  }

  getAll() {
    return this.http.get('/api/notes/', this.jwt()).map((response: Response) => response.json());
  }

  getById(id: number) {
    return this.http.get('/api/notes/' + id, this.jwt()).map((response: Response) => response.json());
  }

  create(note: Note) {
    return this.http.post('/api/notes', note, this.jwt()).map((response: Response) => response.json());
  }

  update(note: Note) {
    return this.http.put('/api/notes/' + note.id, note, this.jwt()).map((response: Response) => response.json());
  }

  delete(id: number) {
    return this.http.delete('/api/notes/' + id, this.jwt()).map((response: Response) => response.json());
  }

  // private helper methods

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
      return new RequestOptions({headers: headers});
    }
  }
}
