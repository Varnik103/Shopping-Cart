import { Component, Input} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @Input()
    products: any[] = [];
 productList = [
  {image: '../assets/helmet.jpeg' ,name:"Shubert Helmet", subtitle:"Driving helmet", stock:"IN STOCK", price:999},
  {image: '../assets/gloves.jpg' ,name:"Sport Gloves", subtitle:"Gloves", stock:"OUT OF STOCK", price:99},
  {image: '../assets/nike.jpeg' ,name:"Nike Roshe One", subtitle:"Men's running shoes", stock:"IN STOCK", price:3250},
  {image: '../assets/blazer.jpeg' ,name:"Blazer", subtitle:"Classy Blazer", stock:"IN STOCK", price:5000},
  {image: '../assets/whey.jpg' ,name:"Whey Protein", subtitle:"Sports Nutrition", stock:"IN STOCK", price:1700},
  {image: '../assets/gel.jpeg' ,name:"Set Wet", subtitle:"Premium Gel for Men", stock:"OUT OF STOCK", price:49},
  {image: '../assets/tv.jpeg' ,name:"Croma HD Ready", subtitle:"TV", stock:"IN STOCK", price:12499},
  {image: '../assets/shirt.jpeg' ,name:"Tencel", subtitle:"Shirts for Men", stock:"IN STOCK", price:999},
  {image: '../assets/legging.jpeg' ,name:"Legging", subtitle:"legging", stock:"OUT OF STOCK", price:199}
  ];
  cartProductList: CartProduct[] = [];


 addProductToCart(product: { name: any; price: number; num: number; }) {
  const productExistInCart = this.cartProductList.find(({name}) => name === product.name); // find product by name
  if (!productExistInCart) {
    this.cartProductList.push({...product, num:1}); // enhance "porduct" opject with "num" property
    return;
  }
  productExistInCart.num += 1;
}

  removeProduct(product: { name: any; }) {
   this.cartProductList = this.cartProductList.filter(({name}) => name !== product.name)
  }

  calcTotal() {
    return this.cartProductList.length;
  }
}


interface CartProduct {
  name: string;
  num: number;
  // any other properties that you want to include
}