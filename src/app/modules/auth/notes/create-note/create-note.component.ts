import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NotesService } from 'src/app/services/notes/notes.service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  private today = new Date();
  noteForm!: FormGroup
  noteFormSubmit_Subscription!: Subscription

  constructor(
    private formBuilder: FormBuilder,
    private notesService: NotesService,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.buildNoteForm();
  }
  ngOnDestroy(): void {
    if (this.noteFormSubmit_Subscription) {
      this.noteFormSubmit_Subscription.unsubscribe()
    }
  }

  buildNoteForm(): void {
    this.noteForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      created: null,
      modified: null,

      addedBy: ['Safikul islam', Validators.required],
      addedDate: [this.today.toISOString(), Validators.required],
      updatedBy: ['Safikul islam', Validators.required],
      updatedDate: [this.today.toISOString(), Validators.required]
    })
  }

  onSubmitNoteForm(): void {
    if (this.noteForm.invalid) {
      console.log(this.noteForm.value)
      return
    }
    this.noteFormSubmit_Subscription = this.notesService.AddNote(this.noteForm.value).subscribe({
      next: (note: any) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Note saved successfully!' });
        this.buildNoteForm();
      },
      error: (err: any) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Error while saving note!' });
      },
      complete: () => { }
    })
  }

  resetNoteForm(): void {
    this.buildNoteForm();
  }

}
