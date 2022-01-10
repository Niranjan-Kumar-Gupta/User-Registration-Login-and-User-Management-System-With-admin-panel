import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isMenuCollapsed = true;

  loginForm = new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })
  emailError = ''
  passwordError = ''

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
   if (this.auth.isLoggedIn()) {
       this.router.navigate(['admin']);
   }
   
  }
  valuechange(event:any){
    this.emailError = ''
    this.passwordError = ''
  }
  onSubmit():void{
    if (this.loginForm.valid) {
       this.auth.login(this.loginForm.value).subscribe((result)=>{
         
          if (result.status){
             this.auth.setToken(result.token)
          
             this.router.navigate(['admin']);
          }else{
            const regExpEmail = new RegExp('email','g')
            const regExpPass = new RegExp('password','g')
            if (regExpEmail.test(result.message)) {
               this.emailError = result.message
            }
            if (regExpPass.test(result.message)) {
               this.passwordError = result.message
            }
          }
           
       },(err:Error)=>{
         alert(err.message)
       })
    }
  }

}
