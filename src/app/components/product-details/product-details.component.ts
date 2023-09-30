import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/dataType';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  productData: undefined | Product;
  productQuantity: number = 1;
  presentInCart: boolean = false;
  removeCart: boolean = false;
  constructor(public activeRoute: ActivatedRoute, public product: ProductService){}
  ngOnInit(){
    const productId = this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getProduct(productId).subscribe((product)=>{
      if(product){
        this.productData = product;
      }
    })

    let cartData = localStorage.getItem('localCart');
    if(productId && cartData){
      let items = JSON.parse(cartData);
      items = items.filter((item:Product)=>{
        return item.id.toString() === productId;
      })
      if(items.length){
        this.removeCart = true;
      }
      else{
        this.removeCart = false;
      }
    }
  }

  handleQuantity(val: string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity++;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity--;
    }
  }

  addToCart(){
    if(this.productData){
      this.productData.quantity = this.productQuantity;
      if(!localStorage.getItem('user')){
        this.product.addToCart(this.productData);
        this.removeCart = true;
      }
      else{

      }
      
    }
  }

  removeFromCart(productId: number){
    this.product.removeFromCart(productId);
    this.removeCart = false;
  }
}
