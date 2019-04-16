import { Component, OnInit } from '@angular/core';
import { Order } from './../../shared/models/order.model';
import { Observable } from 'rxjs';
import { OrderService } from './../../core/services/orders.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  myOrders$: Observable<Order[]>
  userId: string
  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem('userId')
    this.myOrders$ = this.orderService.getUserOrder(this.userId)
  }

}
