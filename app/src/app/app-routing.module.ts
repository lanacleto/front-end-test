import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: UserSettingsComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
