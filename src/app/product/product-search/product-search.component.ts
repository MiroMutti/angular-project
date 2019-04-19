import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './../../shared/models/product.model';
import { ProductService } from './../../core/services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  searchedProducts$: Observable<Product[]>

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const query = this.route.snapshot.queryParams['search']
    
    this.searchedProducts$ = this.productService.getSearchProduct(query)
  }

}
