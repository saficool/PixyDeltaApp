import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SideMenubarList } from 'src/app/models/_shared/side-menubar-list';

@Injectable({
  providedIn: 'root'
})
export class SideMenubarListService {

  constructor(private http: HttpClient) { }

  getSideMenubarList(): Observable<SideMenubarList[]> {
    return this.http.get<SideMenubarList[]>("./data/side-menubar-list.json")
  }
}
