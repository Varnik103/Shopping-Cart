import { Component, Input, Output, EventEmitter  } from '@angular/core';


@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent  {
  @Input()
    products: any;
  @Output() productRemoved = new EventEmitter();

  
  removeProduct(product: any) {
    this.productRemoved.emit(product)
    this.calcagain(product);
  }
  price:any;
  calcagain(product:any){
    this.price=this.price-product.price;
  }
  calc(){
    // console.log(this.products);
    let total = 0;
    for (const product of this.products) {
      total += product.price;
      console.log(product);
    }
    // console.log(total);
    this.price=total;
  }
  ngOnChanges():void{
    this.calc();
  }
  ngOnInit():void{
    this.calc();
  }
}