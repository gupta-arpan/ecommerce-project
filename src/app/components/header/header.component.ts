import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuType:string = 'default';
  sellerName:string = '';
  constructor(public route:Router){}
  ngOnInit():void {
    this.route.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller';
          if(localStorage.getItem('seller')){
            let sellerStore = localStorage.getItem('seller');
            let sellerData = sellerStore && JSON.parse(sellerStore)[0];
            if(sellerData){
              this.sellerName = sellerData.name;
            }
          }
        }
        else{
          this.menuType = 'default';
        }
      }
    })
  }

  logout():void{
    localStorage.removeItem('seller');
    this.route.navigate(['seller-auth']);
  }
}
