import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  menus = [
    { name: 'Menu 1', image: 'assets/Menu Kopi 1 2.png' },
    { name: 'Menu 2', image: 'assets/Menu Kopi 2 2.png' },
    { name: 'Menu 3', image: 'assets/Menu Kopi 3 2.png' },
    { name: 'Menu 4', image: 'assets/Menu Kopi 2 2.png' },
    // Add more menu items here
  ];
  cartItems: any[] = [];

  constructor(private router: Router) { }

  addToCart(menu: any) {
    this.cartItems.push(menu);
  }

  openCart() {
    this.router.navigate(['/cart']);
  }

  ngOnInit() {
  }
}