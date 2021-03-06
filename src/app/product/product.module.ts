import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MaterialModule } from './../material.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AdminGuard } from './../core/guards/admin.guard';
import { ProductCategoryComponent } from './product-category/product-category.component';
import { ProductSearchComponent } from './product-search/product-search.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductCreateComponent,
    ProductCardComponent,
    ProductCategoryComponent,
    ProductSearchComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'create', component: ProductCreateComponent, canActivate: [AdminGuard] },
      { path: 'details/:id', component: ProductDetailsComponent },
      { path: 'search', component: ProductSearchComponent },
      { path: ':category', component: ProductCategoryComponent }
    ])
  ],
  exports: [
    ProductListComponent,
    ProductDetailsComponent,
    ProductCreateComponent,
    ProductCardComponent
  ]
})
export class ProductModule { }
