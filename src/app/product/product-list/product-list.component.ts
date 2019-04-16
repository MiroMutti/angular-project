import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../core/services/products.service';
import { Observable } from 'rxjs';
import { Product } from './../../shared/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

  allProducts$: Observable<Product[]>

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.allProducts$ = this.productService.getAll()
  }

  productsChange($event){
    this.allProducts$ = this.productService.getAll()
  }
}
