import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SigninComponent } from './cred/signin/signin.component';
import { SignupComponent } from './cred/signup/signup.component';
import { TodoDetailsComponent } from './mycomponent/todo-details/todo-details.component';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { AboutComponent } from './mypages/about/about.component';
import { HomeComponent } from './mypages/home/home.component';

const routes: Routes = [
  {path: "", component: TodosComponent},
  {path: "about", component: AboutComponent},
  {path: "todos", component: TodosComponent},
  {path: "todos/:id", component: TodoDetailsComponent},
  {path: "signup", component: SignupComponent},
  {path: "login", component: SigninComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
