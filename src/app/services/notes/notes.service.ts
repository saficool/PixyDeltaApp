import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddNote, Note } from 'src/app/models/note.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  GetNotes(): Observable<Note[]> {
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      params: new HttpParams()
    }
    return this.http.get<Note[]>(this.apiUrl + "Notes/GetNotes", options)
  }

  AddNote(note: AddNote): Observable<Note> {
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      params: new HttpParams()
    }
    return this.http.post<Note>(this.apiUrl + "Notes/AddNote", note, options)
  }

  DeleteNote(id: string): Observable<Note> {
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json'),
      params: new HttpParams().append('id', id)
    }
    return this.http.delete<Note>(this.apiUrl + "Notes/DeleteNote", options)
  }
}
