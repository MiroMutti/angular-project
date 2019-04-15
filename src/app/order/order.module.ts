import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MyOrdersComponent, PendingOrdersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'my-orders', component: MyOrdersComponent },
      { path: 'all-orders', component: PendingOrdersComponent }
    ])
  ]
})
export class OrderModule { }
