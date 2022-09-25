import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/local.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  todo: any
  todoItems:any
  message: any
  hasTodo: boolean | undefined
  loader: boolean | undefined
  error: boolean | undefined

  constructor(private _localTodos: LocalService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loader = true
    this.getOneTodo(this.route.snapshot.paramMap.get('id'))
  }

  getOneTodo(id: any): void{
    this._localTodos.getOne(id).subscribe( data => {
      this.todoItems = data
      this.todo = this._localTodos.decTodo(this.todoItems)
      this.loader = false
    },
    error =>{
      console.log(error)
      this.error = true
    })
  }

  statusChanged(data: any){
    this.loader = true
    this.message = data
    this.getOneTodo(this.route.snapshot.paramMap.get('id'))
  }

  removeData(todo: any){
    this.loader = true
    this._localTodos.removeData(todo.id).subscribe(data => {
      console.log('Todo is removed succesfully')
      this.todo = undefined
      this.error = true
    }, error =>{
      console.log(error)
      this.error = true
    });
    this.getOneTodo(this.route.snapshot.paramMap.get('id'))
  }

  todoUpdate(){
    this.loader = true
    this._localTodos.updateData(this.todo).subscribe(data => {
      this.message = data
      this.getOneTodo(this.route.snapshot.paramMap.get('id'))
    }, error =>{
      console.log(error)
      this.error = true
    })
  }

}
