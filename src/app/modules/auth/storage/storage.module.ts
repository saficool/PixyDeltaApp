import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StorageRoutingModule } from './storage-routing.module';
import { StorageComponent } from './storage.component';
import { AuthSharedModule } from '../_shared/auth-shared.module';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    StorageComponent
  ],
  imports: [
    CommonModule,
    StorageRoutingModule,
    AuthSharedModule,
    MatTableModule
  ]
})
export class StorageModule { }
