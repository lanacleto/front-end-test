import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserSettingsComponent } from './pages/user-settings/user-settings.component';
import { HeaderComponent } from './partials/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserSettingsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
