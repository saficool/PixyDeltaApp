import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStorageRoutingModule } from './list-storage-routing.module';
import { ListStorageComponent } from './list-storage.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    ListStorageComponent
  ],
  imports: [
    CommonModule,
    ListStorageRoutingModule,
    MatTableModule
  ]
})
export class ListStorageModule { }
