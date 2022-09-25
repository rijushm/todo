import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PublicService } from '../public.service';
import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errMsg: string | undefined
  btnActive: boolean | undefined
  passValid: boolean | undefined
  conPassValid: boolean | undefined
  isSuccess: boolean | undefined
  signupForm: FormGroup;

  constructor(private _public: PublicService, private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/)]],
      verpassword: ['', [Validators.required, Validators.minLength(6)]]
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
        trigger: "#signup"
      }
    })
  }

  signup(){
    if(!this.signupForm.valid){
      console.log('returned')
      return
    }
    this.btnActive = true
    if(this.signupForm.get('password')?.value !== this.signupForm.get('verpassword')?.value){
      this.conPassValid = true
      this.btnActive = false
      return
    }
    this.conPassValid = false
    this._public.signUpData(this.signupForm.value).subscribe(data =>{
      this.isSuccess = true
      this.btnActive = false
      this.errMsg = ''
    }, err=>{
      this.isSuccess = false
      this.errMsg = err.error.message
      this.btnActive = false
    })
  }

}
