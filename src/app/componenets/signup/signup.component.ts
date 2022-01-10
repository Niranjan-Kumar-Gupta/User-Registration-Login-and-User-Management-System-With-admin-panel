import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public isMenuCollapsed = true;

  signupForm = new FormGroup({
    email:new FormControl(''),
    phone:new FormControl(' '),
    password:new FormControl('')
  })
  emailError = ''
  phoneError = ''
  passwordError = ''

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  valuechange(e:any){
    this.emailError = ''
    this.phoneError = ''
    this.passwordError = ''
  }

  onSubmit():void{
    if (this.signupForm.valid) {
       this.auth.signup(this.signupForm.value).subscribe((result)=>{
          console.log(result)
          if (result.status){  
             this.router.navigate(['login']);
             alert(result.message)
          }else{
            const regExpEmail = new RegExp('email','g')
            const regExpPhone = new RegExp('phone','g')
            const regExpPass = new RegExp('password','g')
            if (regExpEmail.test(result.message)) {
               this.emailError = result.message
            }
            if (regExpPhone.test(result.message)) {
              this.phoneError = result.message
           }
            if (regExpPass.test(result.message)) {
               this.passwordError = 'Password must have at least 1 Upper Case, 1 lower case, and 1 numeric character'
            }
          }
           
       },(err:Error)=>{
         alert(err.message)
       })
    }
  }



}
