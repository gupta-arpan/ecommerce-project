import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/dataType';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  productData: undefined | Product
  updateProductMessage: string | undefined
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router){
    
  }
  ngOnInit(){
    let productId = this.route.snapshot.paramMap.get('id');
    productId && this.productService.getProduct(productId).subscribe((data)=>{
      this.productData = data;
    })
  }
  updateProductData(updatedProduct:Product){
    if(this.productData){
      updatedProduct.id = this.productData.id;
    }
    this.productService.updateproduct(updatedProduct)
    .subscribe((data)=>{
      if(data){
        this.updateProductMessage = "Product has been updated successfully";
      }
      setTimeout(()=>{
        this.updateProductMessage = undefined;
        this.router.navigate(['seller-home']);
      },3000);
    })
  }
}
