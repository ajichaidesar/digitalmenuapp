import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  tableNumber: number = 0; // Assign an initial value to tableNumber
  cartItems: any[] = [];
  constructor(
    private router: Router,
    private cartService: CartService
  ) { }
  ngOnInit() {
    // Initialize cartItems
    this.cartItems = this.cartService.getCartItems();
  }
  decreaseQuantity(item: any) {
     item.price -= item.price; 
  }
  increaseQuantity(item: any) {
    item.price += item.price;
  }
  calculateTotalAmount(): number {
    let totalAmount = 0;
    for (const item of this.cartItems) {
      totalAmount += item.price;
    }
    return totalAmount;
  }
  openCart() {
    const totalOrder = this.calculateTotalAmount(); // Calculate the total order value
    this.router.navigate(['/payment'], { state: { totalOrder } }); // Pass the total order as a state parameter
  }
  removeItem(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }
  pesanSekarang() {
    // Implement any necessary logic or display a success message to the user
    alert('Order placed successfully!');
    // Redirect to the payment page or any other desired page
    this.router.navigate(['/payment']);
  }
}