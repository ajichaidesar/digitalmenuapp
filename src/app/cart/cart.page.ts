import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any[] = [];
  cartTitle: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
    // Initialize cartItems and cartTitle
    this.cartItems = [
      { name: 'Product 1', price: 10 },
      { name: 'Product 2', price: 20 },
      { name: 'Product 3', price: 30 }
    ];

    // Set cartTitle based on the desired language
    this.setCartTitle('Cart'); // Default to English
  }

  setCartTitle(title: string) {
    this.cartTitle = title;
  }

  addToCart(menu: any) {
    this.cartItems.push(menu);
  }

  pesanSekarang() {
    // Implement logic to perform any necessary actions before navigating to the payment page

    // Redirect to the payment page
    this.router.navigate(['/payment']);
  }
}