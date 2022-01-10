import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-update-candidate',
  templateUrl: './update-candidate.component.html',
  styleUrls: ['./update-candidate.component.css']
})
export class UpdateCandidateComponent implements OnInit {

  
  updateForm = new FormGroup({
    _id:new FormControl(''),
    name:new FormControl('', Validators.required),
    dateOfBirth:new FormControl('', Validators.required),
    age:new FormControl('', Validators.required),
    address:new FormControl('', Validators.required),
    state:new FormControl('', Validators.required),
    pinCode:new FormControl('', Validators.required),

  })

  constructor(private auth:AuthService,private router:ActivatedRoute,private navigateRouter: Router ) { }

  ngOnInit(): void {
  
    const _id = this.router.snapshot.params['_id']
    this.auth.getCandidateById(_id).subscribe((result)=>{
          
            this.updateForm = new FormGroup({
              _id:new FormControl(_id),
              name:new FormControl(result['name']),
              dateOfBirth:new FormControl(result['dateOfBirth']),
              age:new FormControl(result['age']),
              address:new FormControl(result['address']),
              state:new FormControl(result['state']),
              pinCode:new FormControl(result['pinCode']),
          
            })                  
         },(err:Error)=>{
           alert(err.message)
         })
  }


  
  onSubmit():void{
    if (this.updateForm.valid) {
        this.auth.updateCandidate(this.updateForm.value).subscribe((result)=>{
         // console.log(result)
          this.updateForm.reset() 
          alert(result.message)
          this.navigateRouter.navigate(['admin/home']);        
       },(err:Error)=>{
         alert(err.message)
       })
       
     }
  }

}
