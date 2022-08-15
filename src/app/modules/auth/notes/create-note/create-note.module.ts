import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateNoteRoutingModule } from './create-note-routing.module';
import { CreateNoteComponent } from './create-note.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    CreateNoteComponent
  ],
  imports: [
    CommonModule,
    CreateNoteRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    ToastModule
  ],
  providers: [MessageService],
  exports: [CreateNoteComponent]
})
export class CreateNoteModule { }
