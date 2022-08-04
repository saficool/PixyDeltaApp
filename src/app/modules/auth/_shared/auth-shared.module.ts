import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideIconbarComponent } from './side-iconbar/side-iconbar.component';
import { SideMenubarComponent } from './side-menubar/side-menubar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SideIconbarComponent,
    SideMenubarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    SideIconbarComponent,
    SideMenubarComponent,
  ]
})
export class AuthSharedModule { }
