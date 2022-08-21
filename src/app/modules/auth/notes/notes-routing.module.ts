import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes.component';

const routes: Routes = [
  {
    path: '',
    component: NotesComponent,
    children: [
      { path: '', redirectTo: 'all-notes', pathMatch: 'full' },
      { path: 'all-notes', loadChildren: () => import("./list-notes/list-notes.module").then(m => m.ListNotesModule) },
      { path: 'create-note', loadChildren: () => import("./create-note/create-note.module").then(m => m.CreateNoteModule) },
      { path: 'update-note', loadChildren: () => import("./update-note/update-note.module").then(m => m.UpdateNoteModule) },
      // {path: 'edit-note/:id', loadChildren: () => import("./edit-note/edit-note.module").then(m => m.EditNoteModule)},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotesRoutingModule { }
