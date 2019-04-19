import { Component, OnInit } from '@angular/core';
import { Order } from './../../shared/models/order.model';
import { Observable } from 'rxjs';
import { OrderService } from './../../core/services/orders.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
  
  allOrders$: Observable<Order[]>

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.allOrders$ = this.orderService.getAll()
  }
  
  ordersChange($event){
    this.allOrders$ = this.orderService.getAll()
  }
}
