import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from 'src/app/interfaces/theme.interface';
import { DefaultDark, DefaultLight } from 'src/app/themes/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private active: Theme = DefaultLight;
  public availableThemes: any[] = [DefaultLight, DefaultDark];

  constructor(private http: HttpClient) { }

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  setTheme(_themeName: any): void {
    this.setActiveTheme(_themeName);
  }

  setActiveTheme(theme: Theme): void {
    localStorage.setItem("pixy-theme", theme.name);
    this.active = theme;
    Object.keys(this.active.properties).forEach(property => {
      document.documentElement.style.setProperty(
        property,
        this.active.properties[property]
      );
    });
  }

}
