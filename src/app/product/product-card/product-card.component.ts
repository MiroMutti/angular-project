import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from './../../shared/models/product.model';
import { AuthService } from './../../core/services/auth.service';
import { ProductService } from './../../core/services/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product
  @Output() deleteEvent = new EventEmitter<void>()
  isAdmin: Boolean
  constructor(
    private authService: AuthService,
    private productService: ProductService
  ) { }

  ngOnInit() { 
    this.isAdmin = this.authService.isAdmin()
  }

  deleteProduct(id: string){
    this.productService.deleteProduct(id)
    .subscribe(() => {
      this.deleteEvent.emit()
    })
  }
}
