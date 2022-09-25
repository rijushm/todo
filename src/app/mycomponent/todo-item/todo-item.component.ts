import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from '../../Todo'
import { LocalService } from '../../local.service'
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";
import * as CryptoJS from 'crypto-js'

@Component({
  selector: '.app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Output() todoRemover: EventEmitter<Todo> = new EventEmitter();
  @Output() todoStatusChanged: EventEmitter<Todo> = new EventEmitter();
  @Input() todos: any

  todoItems:any

  constructor(private _localTodos: LocalService) { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger)
    this.getAllTodo()
  }

  taskAnimation(){
    ScrollTrigger.batch('article', {
      // onEnter: batch => gsap.from('article', {opacity: 0, translateY: 20, stagger: 0.2})
    })
  }

  getAllTodo(): void{
    this._localTodos.getData().subscribe( data => {
      this.todoItems = data
      this.todos = this._localTodos.decTodos(this.todoItems)
      this.taskAnimation()
    },
    error =>{
      console.log(error)
    })
  }

  removeData(todo: any){
    this._localTodos.removeData(todo.id).subscribe(data => {
      // console.log(data)
      this.todoRemover.emit(todo)
    }, error =>{
      console.log(error)
    });
    this.getAllTodo()
  }

  statusChanged(data: any){
    this.getAllTodo()
    this.todoStatusChanged.emit(data)
  }

}
