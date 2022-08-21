import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { LocalService } from '../../local.service';

@Component({
  selector: 'app-todo-status',
  templateUrl: './todo-status.component.html',
  styleUrls: ['./todo-status.component.css']
})
export class TodoStatusComponent implements OnInit {

  @Input() todo: Todo | any
  @Input() i: number | any
  @Output() statusChanged: EventEmitter<Todo> = new EventEmitter

  statusOption:boolean = false
  todos: any

  constructor(private _localTodos: LocalService) {
    this.todos = _localTodos.getData()
  }

  ngOnInit(): void { }

  markDone(todo: Todo){
    this._localTodos.markedDone(this.todo.sno);
    this.statusOption = false
    console.log(this.todos)
    this.statusChanged.emit(this.todos)
  }

  markNotStarted(todo: Todo){
    this._localTodos.markedNotStarted(this.todo.sno);
    this.statusOption = false
    console.log(this.todos)
    this.statusChanged.emit(this.todos)
  }

  markProgress(todo: Todo){
    this._localTodos.markedProgress(this.todo.sno);
    this.statusOption = false
    console.log(this.todos)
    this.statusChanged.emit(this.todos)
  }

}
