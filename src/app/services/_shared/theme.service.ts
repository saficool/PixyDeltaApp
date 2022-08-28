import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/interfaces/theme.interface';
import { DarkBlueGrey, DarkIndigo, DeepPurple, LightBlue, LightBlueGrey, LightBrown, LightCyan, LightGrey, LightIndigo, LightPink, LightPurple, LightRed, NaturalGrey } from 'src/app/themes/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private active: Theme = NaturalGrey;
  public availableThemes: any[] = [LightGrey, NaturalGrey, LightBlueGrey, DarkBlueGrey, LightRed, LightPink, LightPurple, DeepPurple, LightIndigo, DarkIndigo, LightBlue, LightCyan, LightBrown];

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
