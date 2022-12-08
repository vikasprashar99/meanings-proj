import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { QuizComponentComponent } from './quiz-component/quiz-component.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [Router],
  bootstrap: [AppComponent]
})
export class AppModule { }
