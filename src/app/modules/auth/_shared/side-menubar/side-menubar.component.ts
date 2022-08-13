import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SideMenubarList } from 'src/app/models/_shared/side-menubar-list';
import { SideMenubarListService } from 'src/app/services/_shared/side-menubar-list.service';

@Component({
  selector: 'app-side-menubar',
  templateUrl: './side-menubar.component.html',
  styleUrls: ['./side-menubar.component.scss']
})
export class SideMenubarComponent implements OnInit {

  sideMenubarListsSub!: Subscription;
  currentRouteSub!: Subscription

  sideMenubarLists!: SideMenubarList[];
  currentRoute!: string;
  currentRouteMenus!: any;

  constructor(
    private router: Router,
    private sideMenubarListService: SideMenubarListService
  ) {
    this.getCurrentRoute();
  }

  ngOnInit(): void {
    this.getSideIconAndMenubarList();
  }

  ngOnDestroy(): void {
    if (this.sideMenubarListsSub) {
      this.sideMenubarListsSub.unsubscribe();
    }
    if (this.currentRouteSub) {
      this.currentRouteSub.unsubscribe();
    }
  }

  getSideIconAndMenubarList(): void {
    this.sideMenubarListsSub = this.sideMenubarListService.getSideMenubarList().subscribe({
      next: (res: SideMenubarList[]) => {
        this.sideMenubarLists = res;
        this.getCurrentRoute()
      },
      error: (err) => { console.log(err) }
    })
  }

  getCurrentRoute() {
    this.currentRouteSub = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });

    if (this.currentRoute) {
      var _currentRoute = "/" + this.currentRoute.split('/')[1] + '/' + this.currentRoute.split('/')[2]
      this.currentRouteMenus = this.sideMenubarLists.filter(c => c.route == _currentRoute).map((c: any) => c.children)[0]
      this.sideMenubarListService.setOption(this.currentRouteMenus)
    }
  }
}
