import { CanActivateFn } from '@angular/router';
import { SellerService } from './services/seller.service';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router = new Router
  if(localStorage.getItem('seller')){
    return true;
  }else{
    router.navigate(['seller-auth']);
  }
  return inject(SellerService).isSellerSignedIn;
};
