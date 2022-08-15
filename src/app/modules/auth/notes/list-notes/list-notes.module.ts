import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListNotesRoutingModule } from './list-notes-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ListNotesComponent } from './list-notes.component';
import { DialogModule } from '@angular/cdk/dialog';
import { CreateNoteModule } from '../create-note/create-note.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


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
    MatCardModule,
    MatIconModule,
    CreateNoteModule,
    RouterModule,
    ConfirmDialogModule,
    ToastModule
  ],
  providers: [ConfirmationService, MessageService]
})
export class ListNotesModule { }
