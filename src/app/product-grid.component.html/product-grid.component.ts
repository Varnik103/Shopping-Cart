import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'product-grid',
  templateUrl:'./product-grid.component.html',
  styleUrls: [`./product-grid.component.css`]
})
export class ProductGridComponent  {
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product: any) {
    this.productAdded.emit(product);
  }
}