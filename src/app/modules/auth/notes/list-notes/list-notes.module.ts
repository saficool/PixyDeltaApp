import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListNotesRoutingModule } from './list-notes-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ListNotesComponent } from './list-notes.component';
import { DialogModule } from '@angular/cdk/dialog';
import { CreateNoteComponent } from '../create-note/create-note.component';
import { CreateNoteModule } from '../create-note/create-note.module';



@NgModule({
  declarations: [
    ListNotesComponent,
  ],
  imports: [
    CommonModule,
    ListNotesRoutingModule,
    MatButtonModule,
    CdkAccordionModule,
    DialogModule,
    CreateNoteModule
  ]
})
export class ListNotesModule { }
