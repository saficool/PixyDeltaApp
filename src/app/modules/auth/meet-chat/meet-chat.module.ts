import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetChatRoutingModule } from './meet-chat-routing.module';
import { MeetChatComponent } from './meet-chat.component';
import { AngularSplitModule } from 'angular-split';
import { MatCardModule } from '@angular/material/card';




@NgModule({
  declarations: [
    MeetChatComponent
  ],
  imports: [
    CommonModule,
    MeetChatRoutingModule,
    AngularSplitModule,
    MatCardModule
  ]
})
export class MeetChatModule { }
