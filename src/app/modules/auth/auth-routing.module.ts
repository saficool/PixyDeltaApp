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
      { path: 'connect', loadChildren: () => import("./connect/connect.module").then(m => m.ConnectModule) },
      { path: 'connection', loadChildren: () => import('./connection/connection.module').then(m => m.ConnectionModule) },
      { path: 'app-settings', loadChildren: () => import("./settings/app-settings/app-settings.module").then(m => m.AppSettingsModule) },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
