import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSettingsRoutingModule } from './app-settings-routing.module';
import { AppSettingsComponent } from './app-settings.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppSettingsComponent
  ],
  imports: [
    CommonModule,
    AppSettingsRoutingModule,
    CdkAccordionModule,
    MatIconModule,
    FormsModule
  ]
})
export class AppSettingsModule { }
