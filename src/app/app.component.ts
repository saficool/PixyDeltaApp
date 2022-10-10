import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { ThemeService } from './services/_shared/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Pixy Delta';
  constructor(
    private themeService: ThemeService
  ) {
    let _theme = localStorage.getItem("pixy-theme")!
    if (_theme || _theme != undefined || _theme != null) {
      this.themeService.setActiveTheme(this.themeService.availableThemes.find(t => t.name === _theme)!);
    }
    else {
      this.themeService.setActiveTheme(this.themeService.availableThemes.find(t => t.name === "Default Dark")!);
    }
  }

  ngOnInit(): void {
  }
}
