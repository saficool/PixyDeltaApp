import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes/notes.service';
import { CreateNoteComponent } from '../create-note/create-note.component';
import { ConfirmationService } from 'primeng/api';


@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {
  public notes!: Note[];
  notes_sub!: Subscription
  deleteNote_subscription!: Subscription;

  constructor(
    private notesService: NotesService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit(): void {
    this.getNotes();
  }

  ngOnDestroy(): void {
    if (this.notes_sub) {
      this.notes_sub.unsubscribe();
    }
    if (this.deleteNote_subscription) {
      this.deleteNote_subscription.unsubscribe();
    }
  }

  getNotes(): void {
    this.notes_sub = this.notesService.GetNotes().subscribe({
      next: (data: Note[]) => { this.notes = data; },
      error: (err) => { console.log(err) },
      complete: () => { }
    })
  }

  deleteNote(id: string): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to delete this note?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteNote_subscription = this.notesService.DeleteNote(id).subscribe({
          next: (data: Note) => {
            var _index = this.notes.findIndex(x => x.id == id);
            this.notes.splice(_index, 1);
          }
        });
      }
    });
  }

}
