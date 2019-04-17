import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../core/services/products.service';
import { Observable } from 'rxjs';
import { Product } from './../../shared/models/product.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  products$: Observable<Product[]>
  category: string
  constructor(
    private activeRoute: ActivatedRoute,
    private productService: ProductService,
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(routeParams => {
      this.products$ = this.productService.getProductsCategory(routeParams.category);
      this.category = routeParams.category
    });
  }
}
