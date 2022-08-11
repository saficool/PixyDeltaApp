import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StorageComponent } from './storage.component';

const routes: Routes = [
  {
    path: '',
    component: StorageComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', loadChildren: () => import("./list-storage/list-storage.module").then(m => m.ListStorageModule) },
      { path: 'create', loadChildren: () => import("./create-storage/create-storage.module").then(m => m.CreateStorageModule) },
      { path: 'update', loadChildren: () => import("./update-storage/update-storage.module").then(m => m.UpdateStorageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
