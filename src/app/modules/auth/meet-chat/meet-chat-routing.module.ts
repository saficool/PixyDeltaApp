import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetChatComponent } from './meet-chat.component';

const routes: Routes = [
  { path: '', component: MeetChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetChatRoutingModule { }
