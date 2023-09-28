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

  getProduct(id: string){
    return this.http.get<Product>(`http://localhost:3000/products/${id}`)
  }

  updateproduct(updatedProduct: Product){
    return this.http.put(`http://localhost:3000/products/${updatedProduct.id}`,updatedProduct);
  }

  popularProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=4');
  }

  trendyProducts(){
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=8');
  }

}
