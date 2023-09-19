import { Component } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';
import { Router } from '@angular/router';
import { SignUp, login } from 'src/app/dataType';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  isLoggedIn = false;
  authError:string = "";
  constructor(private seller:SellerService, private router:Router){}
  ngOnInit():void{
    this.seller.reloadSeller();
  }
  signUp(data:SignUp):void{
    this.seller.sellerSignUp(data);
  }

  signIn(data:login):void{
    this.authError = "";
    this.seller.userLogin(data);
    this.seller.isLoginError.subscribe((err)=>{
      this.authError = "Email or password is not correct";
    })
  }

  openSignUp(){
    this.isLoggedIn = false;
  }
  openSignIn(){
    this.isLoggedIn = true;
  }
}
