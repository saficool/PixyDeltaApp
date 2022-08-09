import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(private http: HttpClient) { }

  getAppSettings(): Observable<any> {
    return this.http.get<any>('appsettings/app-settings.json');
  }

  setAppSettings(appSettings: any): Observable<any> {
    return this.http.put<any>('appsettings/app-settings.json', appSettings);
  }
}
