import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo'

@Component({
  selector: '.app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @Input() i!: number;
  @Output() todoRemover: EventEmitter<Todo> = new EventEmitter();
  @Output() markDoneTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(todo: Todo){
    console.log(`Delete event triggered on ${todo.sno} ToDo list`);
    this.todoRemover.emit(todo);
  }

}
