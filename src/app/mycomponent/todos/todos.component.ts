import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo'
import { LocalService } from '../../local.service'
import { TokenStorageService } from 'src/app/cred/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: any;
  todoItems: any
  loader: boolean | undefined
  message: any
  token: any

  constructor(private _localTodos: LocalService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    this.verifyUserToken()
    this.getAllTodo()
  }

  getAllTodo(): void{
    this.loader = true
    this._localTodos.getData().subscribe( data => {
      this.todoItems = data
      // console.log(data)
      this.todos = this._localTodos.decTodos(this.todoItems)
      this.loader = false
    },
    error =>{
      console.log(error)
      this.loader = true
    })
  }

  todoAdded(data: any): void{
    this.message = data
    this.getAllTodo()
  }

  todoRemoved(todo: Todo): void{
    this.getAllTodo()
  }

  todoStatusChanged(data: any): void{
    this.message = data
    this.getAllTodo()
  }

  verifyUserToken(){
    this.token = this.tokenStorage.getToken()
    if(this.token){
      this.tokenStorage.verifyToken(this.token).subscribe(data=>{
        console.log('Verified user! User ID is '+JSON.stringify(data))
      }, err=>{
        console.log(err)
        this.router.navigate(['/login'])
      })
    }else{
      this.router.navigate(['/login'])
    }
  }

}
