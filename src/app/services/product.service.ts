import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  cartData = new EventEmitter<Product[]|[]>();

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

  searchResults(query: string) {
    return this.http.get<Product[]>(`http://localhost:3000/products?q=${query}`);
  }

  addToCart(data: Product){
    let cartData = [];
    const localCart = localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]));
    }
    else{
      cartData = JSON.parse(localCart);
      cartData.push(data);
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
    
  }

  removeFromCart(productId: number){
    let cartData =  localStorage.getItem('localCart');
    if(cartData){
      let items: Product[] = JSON.parse(cartData);
      items = items.filter(item => item.id!== productId);
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items);
    }
  } 

}
