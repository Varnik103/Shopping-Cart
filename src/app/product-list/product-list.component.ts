import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: [`./product-list.component.css`]
})
export class ProductListComponent  {
  @Input()
    products: any[] = [];
  @Output() productAdded = new EventEmitter();
  constructor(private AppComponent:AppComponent, private ShoppingCartComponent:ShoppingCartComponent){}
  display=true;
  addProductToCart(product: any) {
    this.productAdded.emit(product);
    this.AppComponent.calcprice();
    this.ShoppingCartComponent.appTitle();
    // console.log("hii",this.ShoppingCartComponent.count);
    // this.ShoppingCartComponent.calc();
    // console.log
  }
  list(){
    this.display=true;
  }

  grid(){
    this.display=false;
  }
}
