import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes/notes.service';
import { CreateNoteComponent } from '../create-note/create-note.component';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {
  public notes!: Note[];
  notes_sub!: Subscription

  constructor(
    private notesService: NotesService,
    private dialog: Dialog
  ) { }

  ngOnInit(): void {
    this.getNotes();
  }

  ngOnDestroy(): void {
    if (this.notes_sub) {
      this.notes_sub.unsubscribe();
    }
  }

  getNotes(): void {
    this.notes_sub = this.notesService.GetNotes().subscribe({
      next: (data: Note[]) => { this.notes = data; console.log(this.notes) },
      error: (err) => { console.log(err) },
      complete: () => { }
    })
  }

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = '500px';
    dialogConfig.minHeight = '500px';

    this.dialog.open(CreateNoteComponent, dialogConfig);
  }

}
