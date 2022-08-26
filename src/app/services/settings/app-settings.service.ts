import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppSetting } from 'src/app/models/_shared/app-setting.model';

@Injectable({
  providedIn: 'root'
})
export class AppSettingsService {

  constructor(private http: HttpClient) {
  }

  getAppSettings(): Observable<any> {
    return this.http.get<any>('appsettings/app-settings.json');
  }

  setAppSettings(appSettings: any): Observable<any> {
    return this.http.put<any>('appsettings/app-settings.json', appSettings);
  }
}
