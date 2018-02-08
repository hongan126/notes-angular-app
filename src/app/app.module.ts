import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';

import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatTextareaAutosize
} from '@angular/material';
import {NotesManagerComponent} from './notes-manager/notes-manager.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuard} from "./_guards/auth.guard";
import {AuthenticationService} from "./_services/authentication.service";
import {AlertService} from "./_services/alert.service";
import {UserService} from "./_services/user.service";
import {MockBackend} from "@angular/http/testing";
import {fakeBackendProvider} from "./_helpers/fake-backend";
import {BaseRequestOptions, HttpModule} from "@angular/http";
import {RegisterComponent} from './register/register.component';
import {NoteService} from "./_services/note.service";
import { ChangePasswordComponent } from './change-password/change-password.component';
import {AlertComponent} from "./_directives/alert.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotesManagerComponent,
    HeaderComponent,
    RegisterComponent,
    ChangePasswordComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NoopAnimationsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCheckboxModule, MatFormFieldModule, MatListModule, MatGridListModule, MatInputModule, MatIconModule, MatMenuModule,
    HttpClientModule,
    HttpModule
  ],
  exports: [MatTextareaAutosize, MatIconModule],
  providers: [AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    NoteService,
    // providers used to create fake backend
    fakeBackendProvider,
    MockBackend,
    BaseRequestOptions],
  bootstrap: [AppComponent]
})
export class AppModule {
}
