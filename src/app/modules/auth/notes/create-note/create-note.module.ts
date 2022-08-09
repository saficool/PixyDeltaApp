import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNoteRoutingModule } from './create-note-routing.module';
import { CreateNoteComponent } from './create-note.component';


@NgModule({
  declarations: [
    CreateNoteComponent
  ],
  imports: [
    CommonModule,
    CreateNoteRoutingModule
  ]
})
export class CreateNoteModule { }
