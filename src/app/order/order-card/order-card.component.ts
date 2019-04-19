import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from './../../shared/models/order.model';
import { AuthService } from './../../core/services/auth.service';
import { OrderService } from './../../core/services/orders.service';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.css']
})
export class OrderCardComponent implements OnInit {
  @Input() order: Order
  @Output() editEvent = new EventEmitter<void>()

  isAdmin: boolean
  constructor(
    private authService: AuthService,
    private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin()
  }

  confirmOrder(id: string) {
    this.orderService.getById(id)
      .subscribe((order) => {
        let edit = order
        edit.status = "confirmed"

        this.orderService.editOrder(edit, id)
          .subscribe(() => {
            this.editEvent.emit()
          })
      })
  }
}
