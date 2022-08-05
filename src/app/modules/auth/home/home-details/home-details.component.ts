import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.scss']
})
export class HomeDetailsComponent implements OnInit {

  constructor(
    private toastService: HotToastService
  ) { }

  ngOnInit(): void {
  }

  showToast() {
    this.toastService.success("Data saved successfully!", { dismissible: true, })
  }

}
