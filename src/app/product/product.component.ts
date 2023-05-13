import { Component, Input, Output, EventEmitter } from '@angular/core';
import {ShoppingCartComponent} from '../shopping-cart/shopping-cart.component'
@Component({
  selector: 'product',
  templateUrl:'./product.component.html',
  styleUrls: [`./product.component.css`]
})
export class ProductComponent  {
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  // constructor(private ShoppingCartComponent: ShoppingCartComponent) { }

  addProductToCart(product: any) {
    this.productAdded.emit(product);
    // this.ShoppingCartComponent.calc();
    // this.price+=product.price;
  }
  ngOnChanges(){
    
  }
}