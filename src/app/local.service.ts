import { Injectable } from '@angular/core';
import { Todo } from './Todo';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  localData: string | null | undefined
  todos: any

  constructor() {}

  public getData(){
    this.localData = localStorage.getItem("todos")
    if(this.localData == null){
      this.todos = []
    }else{
      this.todos = JSON.parse(this.localData)
    }

    return this.todos
  }

  public saveData(todo: Todo){
    this.todos.push(todo)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  public removeData(todo: Todo){
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1)
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  public markedDone(sno: number){
    let index = sno - 1;
    this.todos[index].active = false;
    this.todos[index].status = "completed";
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  public markedNotStarted(sno: number){
    let index = sno - 1;
    this.todos[index].status = "notstarted"
    this.todos[index].active = true
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  public markedProgress(sno: number){
    let index = sno - 1;
    this.todos[index].status = "inprogress"
    this.todos[index].active = true
    localStorage.setItem("todos", JSON.stringify(this.todos))
  }

  public clearData(todo: Todo){
    localStorage.clear()
  }
}
