import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddNote, Note } from 'src/app/models/note.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  _apiUrl = environment.apiUrl + "Notes/"

  constructor(private http: HttpClient) { }

  GetNotes(): Observable<Note[]> {
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      params: new HttpParams()
    }
    return this.http.get<Note[]>(this._apiUrl + "GetNotes", options)
  }

  AddNote(note: AddNote): Observable<Note> {
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      params: new HttpParams()
    }
    return this.http.post<Note>(this._apiUrl + "AddNote", note, options)
  }

  UpdateNote(note: Note): Observable<Note> {
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      params: new HttpParams()
    }
    return this.http.put<Note>(this._apiUrl + "UpdateNote", note, options)
  }

  DeleteNote(id: string): Observable<Note> {
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      params: new HttpParams().append('id', id)
    }
    return this.http.delete<Note>(this._apiUrl + "DeleteNote", options)
  }
}
