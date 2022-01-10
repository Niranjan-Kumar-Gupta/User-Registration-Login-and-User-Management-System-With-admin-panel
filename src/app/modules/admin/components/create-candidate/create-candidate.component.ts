import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-create-candidate',
  templateUrl: './create-candidate.component.html',
  styleUrls: ['./create-candidate.component.css']
})
export class CreateCandidateComponent implements OnInit {


  candidateForm = new FormGroup({
    name:new FormControl('', Validators.required),
    dateOfBirth:new FormControl('', Validators.required),
    age:new FormControl('', Validators.required),
    address:new FormControl('', Validators.required),
    state:new FormControl('', Validators.required),
    pinCode:new FormControl('', Validators.required),

  })
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    if (this.candidateForm.valid) {  
        this.auth.createCandidate(this.candidateForm.value).subscribe((result)=>{
    
          this.candidateForm.reset()
                  
       },(err:Error)=>{
         alert(err.message)
       })
       
    }
  }

}
