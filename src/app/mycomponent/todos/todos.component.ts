import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo'
import { LocalService } from '../../local.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: any;

  constructor(private _localTodos: LocalService) {
    this.todos = this._localTodos.getData()
  }

  ngOnInit(): void { }

  todoAdded(todo: Todo){
    this.todos = this._localTodos.getData();
  }

  todoRemoved(todo: Todo){
    this.todos = this._localTodos.getData();
  }

}
