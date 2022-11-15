import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-storage',
  templateUrl: './list-storage.component.html',
  styleUrls: ['./list-storage.component.scss']
})
export class ListStorageComponent implements OnInit {

  protected storageConnections: any[] = [
    {
      id: "asdfnxvjnwdandmdndnbfbjb ",
      username: "safikul@itsnmr.onmicrosoft.com",
      storage: "itsdlg3",
      active: true
    },
    {
      id: "fekjsjkdflwefykjdkhbfesbhj ",
      username: "munshi@itsnmr.onmicrosoft.com",
      storage: "itsdlg1",
      active: false
    },
    {
      id: "ijjweegyfdkjdvkjfmnnb",
      username: "arif@itsnmr.onmicrosoft.com",
      storage: "itsdlg2",
      active: true
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
