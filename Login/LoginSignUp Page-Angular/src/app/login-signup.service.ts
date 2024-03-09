import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AnyRecord } from 'dns';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  constructor(private router:Router,private http:HttpClient) { }

  API="http://localhost:8080/"
  isAuthenticated=false
  
  // isAuthenticated():boolean{
  //   if(this.get()!==null){
  //     return true
  //   }
  //   return false
  // }
  loginuser:any
  canAccess(){
    if(!this.isAuthenticated){
      this.router.navigate(['/login'])
    }
  }
  save(data:any){
    return this.http.post(this.API+"save",data)
  }
  get(email:string,password:string){
    return this.loginuser= this.http.get<any>(this.API+"get/"+email+"/"+password)
  }
  
}
