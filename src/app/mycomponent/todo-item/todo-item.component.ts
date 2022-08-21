import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../../Todo'
import { LocalService } from '../../local.service'

@Component({
  selector: '.app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Output() todoRemover: EventEmitter<Todo> = new EventEmitter();
  @Input() todos: any

  localItem: string | null | undefined
  todosIf: any;

  constructor(private _localTodos: LocalService) {
    this.todos = this._localTodos.getData()
  }

  ngOnInit(): void { }

  removeData(todo: Todo){
    this._localTodos.todos = this.todos;
    this._localTodos.removeData(todo);
    this.todoRemover.emit(todo)
  }

  statusChanged(todos: Todo){
    this.todos = this._localTodos.getData()
  }

}
