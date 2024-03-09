import { Component } from '@angular/core';
import { LoginSignupService } from '../login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(private loginService:LoginSignupService,private router:Router){}
  submit=false
  errorMessage=""
  loading=false
  formData={
        id:"" ,
        firstName:"" ,
        middleName:"", 
        lastName: "",
        email:"" ,
        password: "",
        phoneNumber:""  
      }

      onSubmit(formGroup:any){
        this.loginService.save(formGroup.value).subscribe(
          (resp)=>{
            if(resp!=null){
            alert("successfully signed up")
            formGroup.reset()
            console.log(resp)
            this.loginService.isAuthenticated=true
            this.router.navigate(['dashboard'])
            }
            else{
              alert("something went wrong ")
              this.loading=false
            }
            
          }
        )
        this.loading=true
      }
}
