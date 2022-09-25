import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const TOKEN_KEY = "auth-token";
const USER_KEY = "user-token";
const testUrl = 'http://184.169.208.234:8080/api/test/';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor(private _http: HttpClient) { }

  signOut(){
    window.sessionStorage.clear()
  }

  isLoggedIn(){
    const token = window.sessionStorage.getItem(TOKEN_KEY)
    if(token){
      return true
    }else{
      return false
    }
  }

  public saveToken(token: string){
    window.sessionStorage.removeItem(TOKEN_KEY)
    window.sessionStorage.setItem(TOKEN_KEY, token)
    localStorage.setItem(TOKEN_KEY, token)
    console.log('Data stored '+localStorage.getItem(TOKEN_KEY))
  }
  public getToken(){
    // return window.sessionStorage.getItem(TOKEN_KEY)
    return localStorage.getItem(TOKEN_KEY)
  }

  public saveUser(data: any){
    window.sessionStorage.removeItem(USER_KEY)
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(data))
    localStorage.setItem(USER_KEY, JSON.stringify(data))
  }
  public getUser(){
    // return window.sessionStorage.getItem(USER_KEY)
    return localStorage.getItem(USER_KEY)
  }

  public verifyToken(token: string){
    return this._http.get(testUrl+'token', {headers: {'x-access-token': token}})
  }
}
