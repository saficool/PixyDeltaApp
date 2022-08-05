import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeDetailsRoutingModule } from './home-details-routing.module';
import { HomeDetailsComponent } from './home-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    HomeDetailsComponent
  ],
  imports: [
    CommonModule,
    HomeDetailsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class HomeDetailsModule { }
