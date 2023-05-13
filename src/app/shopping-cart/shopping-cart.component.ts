import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent  {
  // @ViewChild(AppComponent)
  // appComponent!: AppComponent;
  @Input() products: any[] = [];
  @Output() productRemoved = new EventEmitter();
  // price: number = 0;
  count:number=0;
  
  constructor(private appComponent:AppComponent){}
  appTitle() {
    return this.appComponent.calcprice();
  }

  removeProduct(product: any) {
    this.productRemoved.emit(product);
    
  }
  ngOnInit():void{
  }
}
