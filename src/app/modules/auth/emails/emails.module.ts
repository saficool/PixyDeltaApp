import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailsRoutingModule } from './emails-routing.module';
import { EmailsComponent } from './emails.component';
import { AngularSplitModule } from 'angular-split';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { TreeModule } from 'primeng/tree';
import { NodeService } from 'src/app/services/nodeservice';



@NgModule({
  declarations: [
    EmailsComponent
  ],
  imports: [
    CommonModule,
    EmailsRoutingModule,
    AngularSplitModule,
    TreeModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [NodeService]
})
export class EmailsModule { }
