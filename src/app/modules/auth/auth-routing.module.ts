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
      { path: 'storage', loadChildren: () => import("./storage/storage.module").then(m => m.StorageModule) },
      { path: 'emails', loadChildren: () => import('./emails/emails.module').then(m => m.EmailsModule) },
      { path: 'chat', loadChildren: () => import('./meet-chat/meet-chat.module').then(m => m.MeetChatModule) },
      { path: 'notes', loadChildren: () => import('./notes/notes.module').then(m => m.NotesModule) },
      { path: 'app-settings', loadChildren: () => import("./settings/app-settings/app-settings.module").then(m => m.AppSettingsModule) },



      { path: 'connection', loadChildren: () => import('./connection/connection.module').then(m => m.ConnectionModule) },

      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
