import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideIconbarComponent } from './side-iconbar/side-iconbar.component';
import { SideMenubarComponent } from './side-menubar/side-menubar.component';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    SideIconbarComponent,
    SideMenubarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatTooltipModule,
    RouterModule
  ],
  exports: [
    SideIconbarComponent,
    SideMenubarComponent,
    HeaderComponent
  ]
})
export class AuthSharedModule { }
