import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Note } from 'src/app/models/note.model';
import { NotesService } from 'src/app/services/notes/notes.service';
import { ShareDataService } from 'src/app/services/_shared/share-data.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  private today = new Date();
  private note!: Note
  public updateNoteForm!: FormGroup;

  constructor(
    private shareDataService: ShareDataService,
    private notesService: NotesService,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getNote();
    this.buildUpdateNoteForm();
  }

  async getNote(): Promise<void> {
    this.note = await this.shareDataService.getData('note');
    if (this.note != null) {
      this.setNoteDetailsToForm();
    }
  }

  buildUpdateNoteForm(): void {
    this.updateNoteForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      content: ['', Validators.required],
      created: null,
      modified: null,
      addedBy: ['Safikul islam', Validators.required],
      addedDate: null,
      updatedBy: ['Safikul islam', Validators.required],
      updatedDate: null
    });
  }

  setNoteDetailsToForm() {
    this.updateNoteForm.patchValue({
      id: this.note.id,
      title: this.note.title,
      content: this.note.content,
      created: this.note.created,
      modified: this.note.modified,
      addedBy: this.note.addedBy,
      addedDate: this.note.addedDate,
      updatedBy: this.note.updatedBy,
      updatedDate: this.note.updatedDate
    });
  }

  onSubmitUpdateNoteForm() {
    this.updateNoteForm.patchValue({
      modified: this.today,
      updatedBy: 'Safikul islam',
      updatedDate: this.today
    });
    if (!this.updateNoteForm.valid) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please fill all the required fields' });
      console.log(this.updateNoteForm.value);
      return;
    }
    this.notesService.UpdateNote(this.updateNoteForm.value).subscribe({
      next: (data) => {
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Note updated successfully' });
        // this.router.navigate(['/auth/notes/all-notes']);
      },
      error: (err) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Something went wrong' });
      },
      complete: () => { }
    });
  }

}
