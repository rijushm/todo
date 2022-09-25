import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Todo } from './Todo';
import * as CryptoJS from 'crypto-js'

const baseUrl = 'http://184.169.208.234:8080/api/todos';
const USER_KEY = "user-token";
const TODO_KEY = "localtodos";

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  localData: string | null | undefined
  todos: any
  key = 'rijushm'

  constructor(private _http: HttpClient) {}

  decTodos(todos: any){
    todos.forEach((todo: any) => {
      todo.title = CryptoJS.AES.decrypt(todo.title, this.key).toString(CryptoJS.enc.Utf8);
      todo.desc = CryptoJS.AES.decrypt(todo.desc, this.key).toString(CryptoJS.enc.Utf8);
    });
    return todos
  }

  decTodo(todo: any){
    todo.title = CryptoJS.AES.decrypt(todo.title, this.key).toString(CryptoJS.enc.Utf8);
    todo.desc = CryptoJS.AES.decrypt(todo.desc, this.key).toString(CryptoJS.enc.Utf8);
    return todo
  }

  enTodos(todos: any){
    todos.forEach((todo: any) => {
      todo.title = CryptoJS.AES.encrypt(todo.title, this.key).toString();
      todo.desc = CryptoJS.AES.encrypt(todo.desc, this.key).toString();
    });
    return todos
  }

  enTodo(todo: any){
    todo.title = CryptoJS.AES.encrypt(todo.title, this.key).toString();
    todo.desc = CryptoJS.AES.encrypt(todo.desc, this.key).toString();
    return todo
  }

  public getData(): Observable<any>{
    const user:any = localStorage.getItem(USER_KEY)
    if(user){
      const userId = JSON.parse(user).id
      return this._http.get(`${baseUrl}/all/${userId}`);
    }else{
      var localData:any = localStorage.getItem(TODO_KEY)
      if(localData !== null){
        localData = (JSON.parse(localData))
      }else{
        localData = []
      }
      return of(localData)
    }
  }

  public getOne(id: any): Observable<any>{
    return this._http.get(`${baseUrl}/${id}`);
  }

  public saveData(data: any): Observable<any>{
    if(!data.title){
      return of('Title should not be empty')
    }
    data.title = CryptoJS.AES.encrypt(data.title, this.key).toString();
    data.desc = CryptoJS.AES.encrypt(data.desc, this.key).toString();
    const user:any = localStorage.getItem(USER_KEY)
    if(user){
      const userId = JSON.parse(user).id
      data.user = userId
      console.log(data)
      return this._http.post(baseUrl, data);
    }else{
      var localData:any = localStorage.getItem(TODO_KEY)
      if(localData !== null){
        localData = (JSON.parse(localData))
      }else{
        localData = []
      }
      localData.push(data)
      return of(localStorage.setItem(TODO_KEY, JSON.stringify(localData)))
    }
  }

  public removeData(id: any): Observable<any>{
    return this._http.delete(`${baseUrl}/${id}`);
  }

  public updateData(data: any): Observable<any>{
    let id = data.id
    data.title = CryptoJS.AES.encrypt(data.title, this.key).toString();
    data.desc = CryptoJS.AES.encrypt(data.desc, this.key).toString();
    return this._http.put(`${baseUrl}/${id}`, data)
  }

  public markedDone(data: any): Observable<any>{
    let id = data.id;
    data.status = "completed";
    data.active = false;

    const user:any = localStorage.getItem(USER_KEY)
    if(user){
      data.title = CryptoJS.AES.encrypt(data.title, this.key).toString();
      data.desc = CryptoJS.AES.encrypt(data.desc, this.key).toString();
      return this._http.put(`${baseUrl}/${id}`, data)
    }else{
      var localData:any = localStorage.getItem(TODO_KEY)
      localData = JSON.parse(localData)
      let index = data.sno - 1;
      localData[index].status = "completed";
      localData[index].active = false;
      return of(localStorage.setItem(TODO_KEY, JSON.stringify(localData)))
    }
  }

  public markedNotStarted(data: any): Observable<any>{
    let id = data.id;
    data.status = "notstarted";
    data.active = true;

    const user:any = localStorage.getItem(USER_KEY)
    if(user){
      data.title = CryptoJS.AES.encrypt(data.title, this.key).toString();
      data.desc = CryptoJS.AES.encrypt(data.desc, this.key).toString();
      return this._http.put(`${baseUrl}/${id}`, data)
    }else{
      var localData:any = localStorage.getItem(TODO_KEY)
      localData = JSON.parse(localData)
      let index = data.sno - 1;
      localData[index].status = "notstarted";
      localData[index].active = true;
      return of(localStorage.setItem(TODO_KEY, JSON.stringify(localData)))
    }
  }

  public markedProgress(data: any): Observable<any>{
    let id = data.id;
    data.status = "inprogress";
    data.active = true;

    const user:any = localStorage.getItem(USER_KEY)
    if(user){
      data.title = CryptoJS.AES.encrypt(data.title, this.key).toString();
      data.desc = CryptoJS.AES.encrypt(data.desc, this.key).toString();
      return this._http.put(`${baseUrl}/${id}`, data)
    }else{
      var localData:any = localStorage.getItem(TODO_KEY)
      localData = JSON.parse(localData)
      let index = data.sno - 1;
      localData[index].status = "inprogress";
      localData[index].active = true;
      return of(localStorage.setItem(TODO_KEY, JSON.stringify(localData)))
    }
  }

  public clearData(todo: Todo){
    localStorage.clear()
  }
}
