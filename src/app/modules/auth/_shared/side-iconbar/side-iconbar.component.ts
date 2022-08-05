import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SideMenubarList } from 'src/app/models/_shared/side-menubar-list';
import { SideMenubarListService } from 'src/app/services/_shared/side-menubar-list.service';

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
    private sideMenubarListService: SideMenubarListService
  ) { }

  ngOnInit(): void {
    this.getSideMenubarList();
  }

  ngOnDestroy(): void {
    if (this.sideMenubarListsSub) {
      this.sideMenubarListsSub.unsubscribe();
    }
  }

  getSideMenubarList(): void {
    this.sideMenubarListsSub = this.sideMenubarListService.getSideMenubarList().subscribe({
      next: (res: SideMenubarList[]) => {
        this.sideMenubarLists = res;
        console.log(this.sideMenubarLists)
      },
      error: (err) => { console.log(err) }
    })
  }

}
