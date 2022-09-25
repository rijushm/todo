import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/cred/token-storage.service';

@Component({
  selector: 'app-noticebar',
  templateUrl: './noticebar.component.html',
  styleUrls: ['./noticebar.component.css']
})
export class NoticebarComponent implements OnInit {

  token: any
  isLoggedIn: boolean | undefined

  constructor(private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    this.token = this.tokenStorage.getToken()
    this.tokenStorage.verifyToken(this.token).subscribe(data=>{
      this.isLoggedIn = true
    },err=>{
      this.isLoggedIn = false
    })
  }

}
