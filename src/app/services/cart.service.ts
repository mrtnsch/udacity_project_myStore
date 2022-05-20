import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { CartEntry } from '../models/CartEntry';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart:CartEntry[] = [];
  cartValue:number=0;
  constructor() { }
  addToCart(product:Product, quantity:number):void {
    //check if present, then increase quantity
    //is not working for some reason...
    let entryIndex = this.cart.findIndex(entry => {
      return entry.product.id === product.id
    })
    if(entryIndex>=0) {
      //product has been found, increase quantity
      this.cart[entryIndex].quantity += quantity;
    } else {
      //product has not been found, push entry to cart
      this.cart.push(new CartEntry(product,quantity))
    }

    this.calculateCartValue();
  }
  removeFromCart() {
    this.cart= this.cart.filter(entry => {
      return entry.quantity > 0;
    })
  }
  readCartContents():CartEntry[] {
    this.calculateCartValue();
    return this.cart;
  }
  calculateCartValue():void {
    let value = 0;
    for (let cartEntry of this.cart) {
      value += cartEntry.product.price * cartEntry.quantity
    }
    this.cartValue = Math.round(value*100)/100;
    //check if quantity is zero, then remove it. putting this code here since this function is oftenly executed
    this.removeFromCart();
  }
}
