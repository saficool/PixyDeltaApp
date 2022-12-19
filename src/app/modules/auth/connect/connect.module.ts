import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectRoutingModule } from './connect-routing.module';
import { ConnectComponent } from './connect.component';
import { SplitterModule } from 'primeng/splitter';


@NgModule({
  declarations: [
    ConnectComponent
  ],
  imports: [
    CommonModule,
    ConnectRoutingModule,
    SplitterModule
  ]
})
export class ConnectModule { }
