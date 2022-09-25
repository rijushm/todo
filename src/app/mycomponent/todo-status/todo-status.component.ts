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

  constructor(private _localTodos: LocalService) { }

  ngOnInit(): void { }

  markDone(todo: Todo){
    this._localTodos.markedDone(todo).subscribe(data => {
      this.statusChanged.emit(data)
    }, error =>{
      console.log(error)
    });
    this.statusOption = false
  }

  markNotStarted(todo: Todo){
    this._localTodos.markedNotStarted(this.todo).subscribe(data => {
      this.statusChanged.emit(data)
    }, error =>{
      console.log(error)
    });
    this.statusOption = false
  }

  markProgress(todo: Todo){
    this._localTodos.markedProgress(this.todo).subscribe(data => {
      this.statusChanged.emit(data)
    }, error =>{
      console.log(error)
    });
    this.statusOption = false
  }

}
