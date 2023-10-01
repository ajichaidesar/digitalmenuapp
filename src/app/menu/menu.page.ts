import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menus = [
    { name: 'Menu 1', image: 'assets/menu1.jpg' },
    { name: 'Menu 2', image: 'assets/menu2.jpg' },
    { name: 'Menu 3', image: 'assets/menu3.jpg' },
    { name: 'Menu 4', image: 'assets/menu4.jpg' },
    // Add more menu items here

  ]

  cartItems: any[] = [];

  addToCart(menu: any) {
    this.cartItems.push(menu);
  }

  openCart() {
    // Implement the logic to open the cart or perform any desired action
  }



  constructor() { }

  ngOnInit() {
  }

}
