import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/dataType';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  searchResult: undefined | Product[]
  constructor(public activeRoute: ActivatedRoute, public product: ProductService){}
  ngOnInit(){
    const query = this.activeRoute.snapshot.paramMap.get('query');
    query && this.product.searchResults(query)
    .subscribe((result)=>{
      if(result){
        this.searchResult = result;
      }
    })
  }
}
