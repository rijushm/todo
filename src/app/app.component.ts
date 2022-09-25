import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from './cred/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'todo-list';
  token: any
  user: any

  constructor(private tokenStorage: TokenStorageService, private router: Router){ }

  ngOnInit(){
    this.verifyUserToken()
  }

  verifyUserToken(){
    this.token = this.tokenStorage.getToken()
    if(this.token){
      this.tokenStorage.verifyToken(this.token).subscribe(data=>{
        this.user = this.tokenStorage.getUser()
      }, err=>{
        console.log(err)
        this.router.navigate(['/login'])
      })
    }else{
      this.router.navigate(['/login'])
    }
  }
}
