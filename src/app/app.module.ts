import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './shared/toolbar/toolbar.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './core/services/orders.service';
import { AuthService } from './core/services/auth.service';
import { ProductService } from './core/services/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    HomeComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ProductModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    ProductService,
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
