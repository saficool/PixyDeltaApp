import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStorageRoutingModule } from './list-storage-routing.module';
import { ListStorageComponent } from './list-storage.component';
import { MatTableModule } from '@angular/material/table';
import { CdkMenuModule } from '@angular/cdk/menu';




@NgModule({
  declarations: [
    ListStorageComponent
  ],
  imports: [
    CommonModule,
    ListStorageRoutingModule,
    MatTableModule,
    CdkMenuModule
  ]
})
export class ListStorageModule { }
