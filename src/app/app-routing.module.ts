import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserPageComponent },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
