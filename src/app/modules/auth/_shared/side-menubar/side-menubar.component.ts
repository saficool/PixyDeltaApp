import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Child, SideMenubarList } from 'src/app/models/_shared/side-menubar-list';
import { SideMenubarListService } from 'src/app/services/_shared/side-menubar-list.service';

@Component({
  selector: 'app-side-menubar',
  templateUrl: './side-menubar.component.html',
  styleUrls: ['./side-menubar.component.scss']
})
export class SideMenubarComponent implements OnInit {
  sideMenubarLists!: SideMenubarList[];
  sideMenubarListsSub!: Subscription;
  currentRoute!: string;
  currentRouteSub!: Subscription
  currentRouteMenus!: any;

  constructor(
    private router: Router,
    private sideMenubarListService: SideMenubarListService
  ) {
    this.getCurrentRoute();
  }

  ngOnInit(): void {
    this.getSideMenubarList();
  }

  ngOnDestroy(): void {
    if (this.sideMenubarListsSub) {
      this.sideMenubarListsSub.unsubscribe();
    }
    if (this.currentRouteSub) {
      this.currentRouteSub.unsubscribe();
    }
  }

  getCurrentRoute() {
    this.currentRouteSub = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log(this.currentRoute)
      }
    });
  }

  getSideMenubarList(): void {
    this.sideMenubarListsSub = this.sideMenubarListService.getSideMenubarList().subscribe({
      next: (res: SideMenubarList[]) => {
        this.sideMenubarLists = res;
        this.getCurrentRouteMenus(this.currentRoute)
        console.log(this.sideMenubarLists)
      },
      error: (err) => { console.log(err) }
    })
  }

  getCurrentRouteMenus(_currentRoute: string) {
    this.currentRouteMenus = this.sideMenubarLists.filter(c => c.route == _currentRoute).map((c: any) => c.children)[0]
    console.log(this.currentRouteMenus)
  }

}
