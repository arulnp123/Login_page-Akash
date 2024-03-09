import { Component } from '@angular/core';
import { LoginSignupService } from '../login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  constructor(private loginService:LoginSignupService,private router:Router){}
  loginData={
    email:"",
    password:""

  }
  public user={
    id:"",
    firstName:"",
    middleName:"",
    lastName:"",
    email:"",
    phoneNumber:""
  }
  submit=false
  loading=false
  errorMessage=""

  onSubmit(formGroup:any){

    this.loginService.get(this.loginData.email,this.loginData.password).subscribe((resp)=>{
      if(resp!=null){
      //  this.user=resp
          alert("login succesfully")
           formGroup.reset()
          //  console.log(resp)
          //  console.log(resp.id)
          //  console.log(resp.firstName)
           this.loginService.isAuthenticated=true
           this.router.navigate(['dashboard'])
      }
      else{
            this.loading=false
            alert("user not found")
      }
    })
    this.loading=true

  //  this.loginService.get().subscribe(resp=>{
  //   const user=resp.find((a:any)=>{
  //     return a.email==formGroup.value.email && a.password==formGroup.value.password
  //   });
  //   if(user){
  //     alert("login succesfully")
  //     formGroup.reset()
  //     this.loginService.isAuthenticated=true
  //     this.router.navigate(['dashboard'])
  //   }
  //   else{
  //     alert("user not found")
  //   }
  //  })
  //   this.loading=true
  // }
  }
}
