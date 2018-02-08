import {NgModule} from '@angular/core';
import {NotesManagerComponent} from "./notes-manager/notes-manager.component";
import {LoginComponent} from "./login/login.component";
import {RouterModule, Routes} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./_guards/auth.guard";
import {ChangePasswordComponent} from "./change-password/change-password.component";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: NotesManagerComponent, canActivate:[AuthGuard]},
  {path: 'register', component: RegisterComponent},
  {path: 'changepass', component: ChangePasswordComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
