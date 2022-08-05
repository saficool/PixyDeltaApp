import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideIconbarComponent } from './side-iconbar/side-iconbar.component';
import { SideMenubarComponent } from './side-menubar/side-menubar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';




@NgModule({
  declarations: [
    HeaderComponent,
    SideIconbarComponent,
    SideMenubarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [
    HeaderComponent,
    SideIconbarComponent,
    SideMenubarComponent,
  ]
})
export class AuthSharedModule { }
