import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  totalOrder: number = 0;
  tableNumber: number = 0;

  constructor(private router: Router,public cartService: CartService ) { }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras && navigation.extras.state) {
      this.totalOrder = navigation.extras.state['totalOrder']; // Retrieve the total order value from the state parameter
    }
  }

  goToMenuPage() {
    this.router.navigate(['/menu']);
  }
}