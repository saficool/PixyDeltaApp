import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNoteRoutingModule } from './create-note-routing.module';
import { CreateNoteComponent } from './create-note.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateNoteComponent
  ],
  imports: [
    CommonModule,
    CreateNoteRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CreateNoteComponent]
})
export class CreateNoteModule { }
