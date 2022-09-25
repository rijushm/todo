import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';
import { LocalService } from '../../local.service'

@Component({
  selector: 'app-add-todos',
  templateUrl: './add-todos.component.html',
  styleUrls: ['./add-todos.component.css']
})
export class AddTodosComponent implements OnInit {

  title: Todo["title"]
  desc: Todo["desc"]

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  @Input() todos: any

  constructor(private _localTodos: LocalService) { }

  ngOnInit(): void { }

  onSubmit(){
    const todo = {
      sno: this.todos.length + 1,
      title: this.title,
      desc: this.desc,
      active: true,
      status: "notstarted"
    }
    this._localTodos.saveData(todo).subscribe(data => {
      //console.log(data)
      this.todoAdd.emit(data)
      this.title = ""
      this.desc = ""
    },error =>{
      console.log(error.message)
    })
  }

}
