import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  WeatherForecast(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'WeatherForecast');
  }
}
