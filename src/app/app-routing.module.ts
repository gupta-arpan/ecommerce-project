import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './components/seller-add-product/seller-add-product.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'seller-auth', component: SellerAuthComponent},
  {path:'seller-home', component: SellerHomeComponent, canActivate:[authGuard]},
  {path:'seller-add-product', component: SellerAddProductComponent, canActivate:[authGuard]},
  {path:'seller-update-product/:id', component: UpdateProductComponent, canActivate:[authGuard]},
  {path:'search/:query', component: SearchResultComponent},
  {path:'product/:productId', component: ProductDetailsComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
