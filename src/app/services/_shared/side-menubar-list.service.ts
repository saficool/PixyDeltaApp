import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child, SideMenubarList } from 'src/app/models/_shared/side-menubar-list';

@Injectable({
  providedIn: 'root'
})
export class SideMenubarListService {

  private menuLists: any = [];

  constructor(private http: HttpClient) { }

  getSideMenubarList(): Observable<SideMenubarList[]> {
    return this.http.get<SideMenubarList[]>("./appsettings/side-menubar-list.json")
  }

  setOption(value: any) {
    this.menuLists = value;
    console.log(this.menuLists)
  }

  getOption() {
    return this.menuLists;
  }
}
