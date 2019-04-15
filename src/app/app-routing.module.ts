import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
  { path: 'products', loadChildren: './product/product.module#ProductModule'},
  { path: 'orders', loadChildren: './order/order.module#OrderModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
