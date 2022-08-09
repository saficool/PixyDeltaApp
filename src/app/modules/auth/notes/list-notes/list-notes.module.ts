import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListNotesRoutingModule } from './list-notes-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ReactiveFormsModule } from '@angular/forms';
import { ListNotesComponent } from './list-notes.component';


@NgModule({
  declarations: [
    ListNotesComponent
  ],
  imports: [
    CommonModule,
    ListNotesRoutingModule,
    MatButtonModule,
    CdkAccordionModule,
    ReactiveFormsModule
  ]
})
export class ListNotesModule { }
