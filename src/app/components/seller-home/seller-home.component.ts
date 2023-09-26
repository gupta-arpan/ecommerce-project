import { Component } from '@angular/core';
import { Product } from 'src/app/dataType';
import { ProductService } from 'src/app/services/product.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  productList: undefined | Product[];
  deleteMessage: string | undefined;
  deleteIcon = faTrash
  constructor(private productService: ProductService){}
  ngOnInit(){
    this.getList();
  }

  deleteProduct(id: number){
    this.productService.deleteProduct(id).subscribe((result)=>{
      if(result){
        this.deleteMessage = "Product deleted successfully";
        this.getList();
      }
      setTimeout(()=>{
        this.deleteMessage = undefined;
      },3000)
    })
  }

  getList(){
    this.productService.getProducts().subscribe((result)=>{
      console.log(result);
      this.productList = result;
    })
  }
}
