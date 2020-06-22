import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {LoginComponent} from './components/login-page/login.component';
import {NotesPageComponent} from './components/notes-page/notes-page.component';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'home', component: AppComponent,
    children: [{
      path: 'notes',
      component: NotesPageComponent,
      canActivate: [AuthGuardService]
    }]
  },
  {path: '**', component: LoginComponent}

];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
