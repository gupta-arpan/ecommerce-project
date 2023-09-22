import { Component } from '@angular/core';
import { Product } from 'src/app/dataType';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productList: undefined | Product[];
  constructor(private productService: ProductService){}
  ngOnInit(){
    this.productService.getProducts().subscribe((result)=>{
      console.log(result);
      this.productList = result;
    })
  }
}
