import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStorageComponent } from './create-storage.component';

const routes: Routes = [
  { path: '', component: CreateStorageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateStorageRoutingModule { }
