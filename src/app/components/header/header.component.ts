import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/dataType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:string = 'default';
  sellerName:string = '';
  userName: string = '';
  searchResult : undefined | Product[]
  cartItems: number = 0;
  constructor(public route:Router, private product: ProductService){}
  ngOnInit():void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            if(sellerData){
              this.sellerName = sellerData.name;
            }
          }
        }
        else if(localStorage.getItem('user')){
          this.menuType = 'user';
          let userStore = localStorage.getItem('user');
            let userData = userStore && JSON.parse(userStore)[0];
            if(userData){
              this.userName = userData.name;
            }
        }
        else{
          this.menuType = 'default';
        }
      }
    })

    let cartData = localStorage.getItem('localCart');
    if(cartData){
      this.cartItems = JSON.parse(cartData).length;
    }

    this.product.cartData.subscribe((data)=>{
      this.cartItems = data.length;
    })
  }

  logout():void{
    localStorage.removeItem('seller');
    this.route.navigate(['seller-auth']);
  }

  userLogout(): void{
    localStorage.removeItem('user');
    this.route.navigate(['user-auth']);
  }

  searchProducts(query: KeyboardEvent){
    if(query){
      const element = query.target as HTMLInputElement;
      if(element.value){
        this.product.searchResults(element.value)
        .subscribe((result)=>{
          if(result.length>5){
            result.length = 5;
          }
          this.searchResult = result;
        })
      }
    }
  }
  hideProducts(){
    this.searchResult = undefined;
  }

  submitSearch(query:string){
    this.route.navigate([`/search/${query}`])
  }

  redirectToDetailsPage(id: number){
    this.route.navigate([`/product/${id}`]);
  }
}
