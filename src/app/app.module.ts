import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './mycomponent/header/header.component';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { TodoItemComponent } from './mycomponent/todo-item/todo-item.component';
import { AddTodosComponent } from './mycomponent/add-todos/add-todos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './mypages/about/about.component';
import { HomeComponent } from './mypages/home/home.component';
import { TodoStatusComponent } from './mycomponent/todo-status/todo-status.component';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './mycomponent/loader/loader.component';
import { TodoDetailsComponent } from './mycomponent/todo-details/todo-details.component';
import { NotificationComponent } from './mycomponent/notification/notification.component';
import { SignupComponent } from './cred/signup/signup.component';
import { SigninComponent } from './cred/signin/signin.component';
import { FlexButtonComponent } from './mycomponent/flex-button/flex-button.component';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { NoticebarComponent } from './mycomponent/noticebar/noticebar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodosComponent,
    AboutComponent,
    HomeComponent,
    TodoStatusComponent,
    LoaderComponent,
    TodoDetailsComponent,
    NotificationComponent,
    SignupComponent,
    SigninComponent,
    FlexButtonComponent,
    NoticebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
