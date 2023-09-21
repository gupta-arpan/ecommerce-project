import { Component } from '@angular/core';
import { Product } from 'src/app/dataType';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductMessage: string|undefined;
  constructor(private product: ProductService){}
  submitProductData(productData: Product){
    this.product.addProduct(productData).subscribe((result)=>{
      if(result){
        this.addProductMessage = "Product has been added successfully";
      }
      setTimeout(()=>{
        this.addProductMessage = undefined;
      },3000);
    })
  }
}
