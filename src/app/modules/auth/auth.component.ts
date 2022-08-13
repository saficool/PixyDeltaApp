import { Component, OnInit } from '@angular/core';
import { ThemeServiceService } from 'src/app/services/_shared/theme-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(
    private themeServiceService: ThemeServiceService
  ) { }

  ngOnInit(): void {
    this.themeServiceService.getAvailableThemes().subscribe({
      next: (res) => { console.log(res) }
    })
  }

}
