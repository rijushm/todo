import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicService } from '../public.service';
import { TokenStorageService } from '../token-storage.service';
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  errMsg: string | undefined
  btnActive: boolean | undefined
  passValid: boolean | undefined
  isSuccess: boolean | undefined
  loginForm: FormGroup;

  constructor(private _public: PublicService, private fb: FormBuilder, private router: Router, private tokenStorage: TokenStorageService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.errMsg = ''
    this.btnActive = false
    this.isSuccess = false
    gsap.registerPlugin(ScrollTrigger)
    this.animateIn()
  }

  animateIn(){
    gsap.from('.content_box', {
      opacity: 0,
      translateY: 60,
      scrollTrigger: {
        trigger: "#login"
      }
    })
  }

  login(){
    if(!this.loginForm.valid){
      console.log('returned')
      return
    }
    this.btnActive = true
    this._public.loginData(this.loginForm.value).subscribe(data =>{
      console.log(data)
      this.tokenStorage.saveToken(data.accessToken)
      this.tokenStorage.saveUser(data)
      this.btnActive = false
      this.errMsg = ''
      this.router.navigate(['/'])
    }, err=>{
      this.isSuccess = false
      this.errMsg = err.error.message
      this.btnActive = false
    })
  }

}
