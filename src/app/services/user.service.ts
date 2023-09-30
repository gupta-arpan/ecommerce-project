import { EventEmitter, Injectable } from '@angular/core';
import { login, userSignup } from '../dataType';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoginError = new EventEmitter<boolean>();
  constructor(public http: HttpClient, public router: Router) { }
  signUp(data: userSignup){
    this.http.post('http://localhost:3000/users',data,{observe: 'response'})
    .subscribe((result)=>{
      if(result && result.body){
        localStorage.setItem('user', JSON.stringify(result.body));
        this.router.navigate(['/']);
      }
    })
  }
  userLogin(data:login){
    this.http.get(`http://localhost:3000/users?email=${data.email}&password=${data.password}`,
    {observe:'response'})
    .subscribe((result:any)=>{
      if(result && result.body && result.body.length){
        localStorage.setItem('user',JSON.stringify(result.body));
        this.router.navigate(['/']);
      }else{
        this.isLoginError.emit(true);
      }
    })
  }
}
