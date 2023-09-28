import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/dataType';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  popularProducts: undefined | Product[];
  trendyProducts: undefined | Product[];
  constructor(private product:ProductService){
  }

  ngOnInit(): void {
    this.product.popularProducts().subscribe((data)=>{
      if(data){
        this.popularProducts = data;
      }
    })
    this.product.trendyProducts().subscribe((data)=>{
      if(data){
        this.trendyProducts = data;
      }
    })
  }
}
