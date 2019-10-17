import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote-component/vote/vote.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
