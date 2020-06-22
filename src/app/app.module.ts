import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './components/note/note.component';
import { NotesListComponent } from './components/notes-page/notes-list/notes-list.component';
import { LoginComponent } from './components/login-page/login.component';
import { NotesPageComponent } from './components/notes-page/notes-page.component';
import {EllipsisModule} from 'ngx-ellipsis';
import {NgpSortModule} from 'ngp-sort-pipe';






@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NotesListComponent,
    LoginComponent,
    NotesPageComponent],
  imports: [
    BrowserModule,
    NgbModule,
    EllipsisModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgpSortModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
