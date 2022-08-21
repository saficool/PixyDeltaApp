import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  private data: any = {};

  constructor() { }

  public setData(key: string, value: any) {
    this.data[key] = value;
  }
  public getData(key: string) {
    return this.data[key];
  }
}


