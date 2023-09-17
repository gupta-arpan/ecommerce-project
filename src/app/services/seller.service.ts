import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SignUp } from '../dataType';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerSignedIn = new BehaviorSubject<boolean>(false)

  constructor(private http:HttpClient, private router:Router) { }
  sellerSignUp(data:SignUp){
    this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe((result)=>{
      this.isSellerSignedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
    })
  }
}
