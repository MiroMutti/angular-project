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

  myOrders: Order

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orderService.getAll().subscribe((data) => {

    })
  }

}
