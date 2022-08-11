import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateStorageRoutingModule } from './update-storage-routing.module';
import { UpdateStorageComponent } from './update-storage.component';


@NgModule({
  declarations: [
    UpdateStorageComponent
  ],
  imports: [
    CommonModule,
    UpdateStorageRoutingModule
  ]
})
export class UpdateStorageModule { }
