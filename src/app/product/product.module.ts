import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MaterialModule } from './../material.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductCardComponent
  ],
  imports: [

    CommonModule,
    MaterialModule
  ],
  exports: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductCardComponent
  ]
})
export class ProductModule { }
