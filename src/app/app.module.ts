import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {ProductComponent}  from './product/product.component';
import {CartProductComponent} from './cart-product/cart-product.component';
import {ProductGridComponent} from './product-grid.component.html/product-grid.component'
@NgModule({
  imports:      [ BrowserModule, FormsModule,MatIconModule, MatCardModule],
  declarations: [ AppComponent, ProductListComponent, ShoppingCartComponent, ProductComponent, CartProductComponent, ProductGridComponent],
  bootstrap:    [ AppComponent ],
  providers: [ShoppingCartComponent]
})
export class AppModule { }
