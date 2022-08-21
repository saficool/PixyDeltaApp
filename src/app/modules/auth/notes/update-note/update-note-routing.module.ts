import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateNoteComponent } from './update-note.component';

const routes: Routes = [
  { path: '', component: UpdateNoteComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateNoteRoutingModule { }
