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
  constructor(public activeRoute: ActivatedRoute, public product: ProductService){}
  ngOnInit(){
    const productId = this.activeRoute.snapshot.paramMap.get('productId');
    productId && this.product.getProduct(productId).subscribe((product)=>{
      if(product){
        this.productData = product;
      }
    })
  }

  handleQuantity(val: string){
    if(this.productQuantity<20 && val==='plus'){
      this.productQuantity++;
    }else if(this.productQuantity>1 && val==='min'){
      this.productQuantity--;
    }
  }
}
