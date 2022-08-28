import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Theme } from 'src/app/interfaces/theme.interface';
import { ThemeService } from 'src/app/services/_shared/theme.service';

@Component({
  selector: 'app-app-settings',
  templateUrl: './app-settings.component.html',
  styleUrls: ['./app-settings.component.scss']
})
export class AppSettingsComponent implements OnInit {

  @ViewChild('detect', { static: false }) detect!: ElementRef

  availableThemes: Theme[] = []
  selectedTheme!: string
  iconBarButtonStyle: string = "rounded";

  items = ['Header', 'Iconbar', 'Menubar'];
  expandedIndex = 0;

  obj!: any

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.getAvailableThemes()
    this.selectedTheme = localStorage.getItem("pixy-theme")!
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.triggerDetect();
    }, 0);
  }

  getAvailableThemes(): void {
    this.availableThemes = this.themeService.getAvailableThemes()
  }

  setTheme(event: Event): void {
    var _themename: any = (<HTMLInputElement>event.target).value;
    this.themeService.setActiveTheme(this.themeService.availableThemes.find(t => t.name === _themename))
    this.triggerDetect();
  }

  setIconBarButtonStyle(event: Event) {
    this.iconBarButtonStyle = (<HTMLInputElement>event.target).value;
  }

  triggerDetect() {
    var _obj = window.getComputedStyle(this.detect.nativeElement)
    this.obj = _obj["backgroundColor"]
  }

}
