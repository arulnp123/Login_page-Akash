import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from '../login-signup.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  constructor(private loginSignup:LoginSignupService){}

loginuser=this.loginSignup.loginuser.subscribe()
// getLoginDetails(){
//   this.loginSignup.loginuser.subscribe((resp:any)=>{
//     this.loginuser=resp
//   })
// }

  ngOnInit(): void {
    this.loginSignup.canAccess()
    // this.getLoginDetails()
  }
}
