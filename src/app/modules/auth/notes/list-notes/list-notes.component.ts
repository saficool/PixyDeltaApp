import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NotesService } from 'src/app/services/notes/notes.service';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {

  private today = new Date();
  public notes!: any[];
  notes_sub!: Subscription

  noteForm!: FormGroup
  constructor(
    private notesService: NotesService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getNotes();
    this.buildNoteForm();
  }

  ngOnDestroy(): void {
    if (this.notes_sub) {
      this.notes_sub.unsubscribe();
    }
  }

  buildNoteForm(): void {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      addedBy: ['Safikul islam', Validators.required],
      addedDate: [this.today.toISOString(), Validators.required],
      updatedBy: ['Safikul islam', Validators.required],
      updatedDate: [this.today.toISOString(), Validators.required]
    })
  }

  getNotes(): void {
    this.notes_sub = this.notesService.WeatherForecast().subscribe({
      next: (data) => { this.notes = data; console.log(this.notes) },
      error: (err) => { console.log(err) },
      complete: () => { }
    })
  }

  onSubmitNoteForm(): void {
    if (this.noteForm.invalid) {
      console.log(this.noteForm.value)
      return
    }
    console.log(this.noteForm.value)
  }

}
