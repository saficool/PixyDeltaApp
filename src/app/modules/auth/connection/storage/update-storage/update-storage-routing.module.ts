import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateStorageComponent } from './update-storage.component';

const routes: Routes = [
  { path: '', component: UpdateStorageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateStorageRoutingModule { }
