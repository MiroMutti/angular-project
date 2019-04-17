import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ProductService } from '../../core/services/products.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
 form: FormGroup
 storages: Array<number> = [16, 32, 64, 128, 256, 512]
 colors: Array<string> = ['Space Gray', 'Silver', 'Gold', 'Rose Gold', 'Red', 'Jet Black', 'White', 'Black', 'Yellow', 'Coral', 'Blue', 'Green', 'Pink']
 categories: Array<string> = ['iPhone', 'iPad', 'Macbook', 'Accessories']
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      year: ['', [Validators.required, Validators.min(2007), Validators.max(2019)]],
      price: ['', [Validators.required, Validators.min(20)]],
      storage: ['', Validators.nullValidator],
      color: ['', Validators.required],
      category: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern('(http[s]?://.*.(?:png|jpg|gif|svg|jpeg))')]],
      descriptionUrl: ['', Validators.pattern('^(https?|ftp)://(-\.)?([^\s/?\.#-]+\.?)+(/[^\s]*)?$')]
    })
  }

  createProduct(){
    const body = this.form.value;
    this.productService.createProduct(body)
      .subscribe(() => {
        this.router.navigate([ '/' ]);
        this.snackbar.open('Successfully added new product.', 'Undo', {
          duration: 4000
        })
      })
  }

  get f(){ return this.form.controls }
}
