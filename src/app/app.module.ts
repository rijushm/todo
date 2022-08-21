import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponent/header/header.component';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { TodoItemComponent } from './mycomponent/todo-item/todo-item.component';
import { AddTodosComponent } from './mycomponent/add-todos/add-todos.component';
import { FormsModule } from '@angular/forms';
import { AboutComponent } from './mypages/about/about.component';
import { HomeComponent } from './mypages/home/home.component';
import { TodoStatusComponent } from './mycomponent/todo-status/todo-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodosComponent,
    AboutComponent,
    HomeComponent,
    TodoStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
