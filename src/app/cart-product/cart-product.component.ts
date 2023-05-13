import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'cart-product',
  templateUrl: `./cart-product.component.html`,
  styleUrls: [`./cart-product.component.css`]
})
export class CartProductComponent  {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter();
  remove(product: any) {
      this.productRemoved.emit(this.product)
  }
}