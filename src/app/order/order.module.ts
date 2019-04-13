import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { PendingOrdersComponent } from './pending-orders/pending-orders.component';

@NgModule({
  declarations: [MyOrdersComponent, PendingOrdersComponent],
  imports: [
    CommonModule
  ]
})
export class OrderModule { }
