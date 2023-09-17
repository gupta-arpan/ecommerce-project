import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SellerHomeComponent } from './components/seller-home/seller-home.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'seller-auth', component: SellerAuthComponent},
  {path:'seller-home', component: SellerHomeComponent},
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
