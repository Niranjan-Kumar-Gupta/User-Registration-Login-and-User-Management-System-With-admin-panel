import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  candidates = null;
  totalCandidate = null;

  constructor(public auth:AuthService) {
    this.getCandidate()
   }

  ngOnInit(): void {
  }
  onClick(){
    this.auth.logout()
  }

  getCandidate(){
    this.auth.getCandidateList().subscribe((result)=>{
        
         this.candidates = result 
         this.totalCandidate = result.length
      },(err:Error)=>{
        alert(err.message)
      })
  }

  deleteCandidate(id:any){
    this.auth.deleteCandidate(id).subscribe((result)=>{
       this.getCandidate()
    },(err:Error)=>{
      alert(err.message)
    })
  }

}
