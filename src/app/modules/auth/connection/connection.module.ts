import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionRoutingModule } from './connection-routing.module';
import { ConnectionComponent } from './connection.component';
import { AuthSharedModule } from '../_shared/auth-shared.module';


@NgModule({
  declarations: [
    ConnectionComponent
  ],
  imports: [
    CommonModule,
    ConnectionRoutingModule,
    AuthSharedModule
  ]
})
export class ConnectionModule { }
