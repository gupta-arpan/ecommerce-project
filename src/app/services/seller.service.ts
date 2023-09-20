import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Product, SignUp, login } from '../dataType';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  isSellerSignedIn = new BehaviorSubject<boolean>(false)
  isLoginError = new EventEmitter<boolean>(false);

  constructor(private http:HttpClient, private router:Router) { }
  sellerSignUp(data:SignUp){
    this.http.post('http://localhost:3000/seller',data,{observe:'response'}).subscribe((result)=>{
      this.isSellerSignedIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body));
      this.router.navigate(['seller-home']);
    })
  }

  userLogin(data:login){
    this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`,
    {observe:'response'})
    .subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        localStorage.setItem('seller',JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
      }else{
        this.isLoginError.emit(true);
      }
    })
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.router.navigate(['seller-home']);
    }
  }

  addProduct(productData: Product){
    this.http.post('http://localhost:3000/products', productData, {observe: 'response'})
    .subscribe((result)=>{
        console.log(result);
      })
  }
}
