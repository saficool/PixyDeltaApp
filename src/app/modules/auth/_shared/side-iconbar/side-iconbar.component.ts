import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SideMenubarList } from 'src/app/models/_shared/side-menubar-list';
import { AppSettingsService } from 'src/app/services/settings/app-settings.service';
import { SideMenubarListService } from 'src/app/services/_shared/side-menubar-list.service';
import { SideMenubarToggleService } from 'src/app/services/_shared/side-menubar-toggle.service';

@Component({
  selector: 'app-side-iconbar',
  templateUrl: './side-iconbar.component.html',
  styleUrls: ['./side-iconbar.component.scss']
})
export class SideIconbarComponent implements OnInit {

  sideMenubarLists!: SideMenubarList[];
  sideMenubarListsSub!: Subscription;

  constructor(
    private router: Router,
    private sideMenubarListService: SideMenubarListService,
    public appSettingsService: AppSettingsService,
    private sideMenubarToggleService: SideMenubarToggleService,
  ) { }

  ngOnInit(): void {
    this.getSideMenubars();
  }

  ngOnDestroy(): void {
    if (this.sideMenubarListsSub) {
      this.sideMenubarListsSub.unsubscribe();
    }
  }

  getSideMenubars(): void {
    this.sideMenubarListsSub = this.sideMenubarListService.getSideMenubarList().subscribe({
      next: (res: SideMenubarList[]) => {
        this.sideMenubarLists = res;
      },
      error: (err) => { }
    })
  }

  toggleSideNav(): void {
    this.sideMenubarToggleService.toggleSideNav();
  }

}
