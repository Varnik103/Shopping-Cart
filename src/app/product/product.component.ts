import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'product',
  templateUrl:'./product.component.html',
  styleUrls: [`./product.component.css`]
})
export class ProductComponent  {
  @Input() product: any;
  @Output() productAdded = new EventEmitter();

  addProductToCart(product: any) {
    this.productAdded.emit(product);
  }
  ngOnChanges(){
    
  }
}