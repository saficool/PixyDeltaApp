import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss']
})
export class AppSettingsComponent implements OnInit {

  items = ['Header', 'Iconbar', 'Menubar'];
  expandedIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
