import { Component } from '@angular/core';
import { LoginSignupService } from '../login-signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public loginSignup:LoginSignupService ){}

  logout(){
    this.loginSignup.isAuthenticated=false
    alert("You are sucessfully logged out")
    this.loginSignup.canAccess()
  }
}
