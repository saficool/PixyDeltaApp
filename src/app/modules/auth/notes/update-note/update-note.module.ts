import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateNoteRoutingModule } from './update-note-routing.module';
import { UpdateNoteComponent } from './update-note.component';
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
    UpdateNoteComponent
  ],
  imports: [
    CommonModule,
    UpdateNoteRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule,
    ToastModule
  ],
  providers: [MessageService],
})
export class UpdateNoteModule { }
