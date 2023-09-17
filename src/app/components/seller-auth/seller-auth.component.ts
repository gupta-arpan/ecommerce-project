import { Component } from '@angular/core';
import { SellerService } from 'src/app/services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller:SellerService, private router:Router){}
  signUp(data:object):void{
    this.seller.sellerSignUp(data).subscribe((result)=>{
      if(result){
        this.router.navigate(['seller-home']);
      }
    })
  }
}
