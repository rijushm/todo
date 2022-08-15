import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TodosComponent } from './mycomponent/todos/todos.component';
import { AboutComponent } from './mypages/about/about.component';
import { HomeComponent } from './mypages/home/home.component';

const routes: Routes = [
  {path: "", component: TodosComponent},
  {path: "about", component: AboutComponent},
  {path: "todos", component: TodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
