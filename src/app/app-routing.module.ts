import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'auth' },
  { path: '', loadChildren: () => import("./modules/unauth/unauth.module").then(m => m.UnauthModule) },
  { path: 'auth', loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
