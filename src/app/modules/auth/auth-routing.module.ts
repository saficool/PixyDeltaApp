import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', loadChildren: () => import("./home/home.module").then(m => m.HomeModule) },
      { path: 'dashboard', loadChildren: () => import("./dashboard/dashboard.module").then(m => m.DashboardModule) },
      { path: 'storage', loadChildren: () => import("./storage/storage.module").then(m => m.StorageModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
