import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectionComponent } from './connection.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectionComponent,
    children: [
      { path: '', redirectTo: 'storage', pathMatch: 'full' },
      { path: 'storage', loadChildren: () => import("./storage/storage.module").then(m => m.StorageModule) },
      { path: 'sql', loadChildren: () => import("./sql/sql.module").then(m => m.SqlModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConnectionRoutingModule { }
