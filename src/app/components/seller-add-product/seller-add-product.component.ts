import { Component } from '@angular/core';
import { Product } from 'src/app/dataType';
import { SellerService } from 'src/app/services/seller.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  constructor(public seller: SellerService){}
  submitProductData(productData: Product){
    this.seller.addProduct(productData);
  }
}
