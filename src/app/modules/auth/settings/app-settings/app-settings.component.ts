import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/interfaces/theme.interface';
import { ThemeService } from 'src/app/services/_shared/theme.service';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss']
})
export class AppSettingsComponent implements OnInit {

  availableThemes: Theme[] = []
  selectedTheme!: string

  items = ['Header', 'Iconbar', 'Menubar'];
  expandedIndex = 0;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.getAvailableThemes()
    this.selectedTheme = localStorage.getItem("pixy-theme")!
  }

  getAvailableThemes(): void {
    this.availableThemes = this.themeService.getAvailableThemes()
  }

  setTheme(event: Event): void {
    var _themename: any = (<HTMLInputElement>event.target).value;
    this.themeService.setActiveTheme(this.themeService.availableThemes.find(t => t.name === _themename))
  }

}
