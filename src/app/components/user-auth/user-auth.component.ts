import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { login, userSignup } from 'src/app/dataType';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  isLoggedIn: boolean = false;
  authError: string = "";
  constructor(private userService: UserService, public route: Router){

  }
  ngOnInit(){
    let user = localStorage.getItem('user');
    if(user){
      this.route.navigate(['/']);
    }
  }
  signUp(data: userSignup){
    this.userService.signUp(data);
  }
  login(data: login){
    this.authError = "";
    this.userService.userLogin(data);
    this.userService.isLoginError.subscribe((err)=>{
      this.authError = "Email or password is not correct";
    })
  }
  openLogin(){
    this.isLoggedIn = true;
  }
  openSignUp(){
    this.isLoggedIn = false;
  }
}
