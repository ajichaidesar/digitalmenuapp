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
    if (item.quantity > 1) {
      item.quantity--;
    }
  }

  increaseQuantity(item: any) {
    item.quantity++;
  }

  openCart() {
    this.router.navigate(['/cart']);
  }

  pesanSekarang() {
    // Implement any necessary logic or display a success message to the user
    alert('Order placed successfully!');
    // Redirect to the payment page or any other desired page
    this.router.navigate(['/payment']);
  }
}