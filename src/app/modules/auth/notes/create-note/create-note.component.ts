import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  private today = new Date();
  noteForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildNoteForm();
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

  onSubmitNoteForm(): void {
    if (this.noteForm.invalid) {
      console.log(this.noteForm.value)
      return
    }
    console.log(this.noteForm.value)
  }

}
