import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { SellerProductListComponent } from './components/seller-product-list/seller-product-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SellerAuthComponent,
    PageNotFoundComponent,
    SellerHomeComponent,
    SellerAddProductComponent,
    SellerProductListComponent,
    UpdateProductComponent,
    SearchResultComponent,
    ProductDetailsComponent,
    UserAuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
