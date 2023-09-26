import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(public http: HttpClient) { }

  addProduct(productData: Product){
   return this.http.post('http://localhost:3000/products', productData);
  }

  getProducts(){
   return this.http.get<Product[]>('http://localhost:3000/products');
  }

  deleteProduct(id: number){
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }
}
