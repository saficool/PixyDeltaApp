import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.scss']
})
export class SqlComponent implements OnInit {
  protected sqlConnections: any[] = [
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
