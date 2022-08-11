import { Component, OnInit } from '@angular/core';
import { SideMenubarListService } from 'src/app/services/_shared/side-menubar-list.service';
import { SideMenubarToggleService } from 'src/app/services/_shared/side-menubar-toggle.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {

  constructor(
    public sideMenubarToggleService: SideMenubarToggleService,
    private sideMenubarListService: SideMenubarListService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
