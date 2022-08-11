import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateStorageRoutingModule } from './create-storage-routing.module';
import { CreateStorageComponent } from './create-storage.component';


@NgModule({
  declarations: [
    CreateStorageComponent
  ],
  imports: [
    CommonModule,
    CreateStorageRoutingModule
  ]
})
export class CreateStorageModule { }
