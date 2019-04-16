import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../../shared/models/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './../../core/services/products.service';
import { OrderService } from './../../core/services/orders.service';
import { MatSnackBar } from '@angular/material';
import { Order } from '../../shared/models/order.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>
  id: string
  order: Order
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private orderService: OrderService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.product$ = this.productService.getDetails(this.id)
  }

  productOrder(product) {
    this.order = {
      status: 'pending',
      product: product.name,
      price: product.price,
      imageUrl: product.imageUrl
    }

    this.orderService.createOrder(this.order)
      .subscribe(() => {
        this.router.navigate(['/']);
        this.snackbar.open('Your order was make successfully. Follow your order status.', 'Undo', {
          duration: 6000
        })
      })
  }

}
