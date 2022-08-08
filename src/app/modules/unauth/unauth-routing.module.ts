import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnauthComponent } from './unauth.component';

const routes: Routes = [
  {
    path: '',
    component: UnauthComponent,
    children: [
      { path: '', loadChildren: () => import("./landing/landing.module").then(m => m.LandingModule) },
      { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
      { path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnauthRoutingModule { }
