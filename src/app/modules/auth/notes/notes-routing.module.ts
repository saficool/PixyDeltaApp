import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent,
    children: [
      { path: '', loadChildren: () => import("./list-notes/list-notes.module").then(m => m.ListNotesModule) },
      { path: 'create-note', loadChildren: () => import("./create-note/create-note.module").then(m => m.CreateNoteModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
