import { Component, OnInit } from '@angular/core';
import { SideMenubarToggleService } from 'src/app/services/_shared/side-menubar-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public sideMenubarToggleService: SideMenubarToggleService) { }

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.sideMenubarToggleService.toggleSideNav();
  }

}
