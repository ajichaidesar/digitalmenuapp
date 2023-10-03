import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = []; // Your cart items

  constructor() { }

  getCartItems(): any[] {
    return this.cartItems;
  }

  addToCart(item: any): void {
    this.cartItems.push(item);
  }

  calculateTotalAmount(): number {
    let totalAmount = 0;
    for (const item of this.cartItems) {
      totalAmount += item.price;
    }
    return totalAmount;
  }
}