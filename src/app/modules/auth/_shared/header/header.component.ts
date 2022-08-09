import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppSettingsService } from 'src/app/services/settings/app-settings.service';
import { SideMenubarToggleService } from 'src/app/services/_shared/side-menubar-toggle.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public appSettings: any;
  appSettings_sub!: Subscription;

  constructor(
    public sideMenubarToggleService: SideMenubarToggleService,
    public appSettingsService: AppSettingsService
  ) { }

  ngOnInit(): void {
    this.appSettingsService.getAppSettings().subscribe({
      next: (appSettings) => { this.appSettings = appSettings; },
      error: (err) => { console.log(err); }
    })
  }

  toggleSideNav(): void {
    this.sideMenubarToggleService.toggleSideNav();
  }

}
