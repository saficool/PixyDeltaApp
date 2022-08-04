import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SideMenubarToggleService } from 'src/app/services/_shared/side-menubar-toggle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public sideMenubarToggleService: SideMenubarToggleService) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
  }
}
