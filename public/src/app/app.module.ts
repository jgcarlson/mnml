import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContenteditableDirective } from 'ng-contenteditable';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EntryComponent } from './entry/entry.component';
import { LoginComponent } from './entry/login/login.component';
import { RegisterComponent } from './entry/register/register.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { CreateComponent } from './home/body/create/create.component';
import { NotesComponent } from './home/body/notes/notes.component';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';
import { NoteService } from './services/note.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    EntryComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    CreateComponent,
    NotesComponent,
    ContenteditableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthGuardService,
    NoteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
