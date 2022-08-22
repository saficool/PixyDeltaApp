import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Theme } from 'src/app/interfaces/theme.interface';
import { ColdDarkNight, ColdPastelCream } from 'src/app/themes/theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private active: Theme = ColdPastelCream;
  public availableThemes: Theme[] = [ColdPastelCream, ColdDarkNight];

  constructor(private http: HttpClient) { }

  getAvailableThemes(): Theme[] {
    return this.availableThemes;
  }

  getActiveTheme(): Theme {
    return this.active;
  }

  isDarkTheme(): boolean {
    return this.active.name === ColdDarkNight.name;
  }

  setDarkTheme(): void {
    this.setActiveTheme(ColdDarkNight);
  }

  setLightTheme(): void {
    this.setActiveTheme(ColdPastelCream);
  }

  setActiveTheme(theme: Theme): void {
    // console.log(theme);
    // localStorage.setItem("theme", theme.name);
    // this.active = theme;
    // Object.keys(this.active.properties).forEach(property => {
    //   document.documentElement.style.setProperty(
    //     property,
    //     this.active.properties[property]
    //   );
    // });
  }

}
