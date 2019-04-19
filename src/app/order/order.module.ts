import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { RouterModule } from '@angular/router';
import { OrderCardComponent } from './order-card/order-card.component';
import { AuthGuard } from './../core/guards/auth.guard';
import { AdminGuard } from './../core/guards/admin.guard';
import { MaterialModule } from './../material.module';

@NgModule({
  declarations: [
    MyOrdersComponent, 
    PendingOrdersComponent, 
    OrderCardComponent
  ],
  imports: [
  MaterialModule,
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'my-orders', component: MyOrdersComponent, canActivate: [AuthGuard] },
      { path: 'all-orders', component: PendingOrdersComponent, canActivate: [AdminGuard] }
    ])
  ]
})
export class OrderModule { }
