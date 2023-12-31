import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  tableNumber: number = 0; // Assign an initial value to tableNumber
menus = [
  { name: 'Americano', image: 'assets/americano.jpg', type: 'kopi', price: 20000, unitPrice: 1},
  { name: 'Espresso', image: 'assets/espresso.jpg', type: 'kopi', price: 25000, unitPrice: 1 },
  { name: 'Long Black', image: 'assets/longblack.jpg', type: 'kopi', price: 20000, unitPrice: 1 },
  { name: 'Vietnam Drip', image: 'assets/vietnamdrip.jpg', type: 'kopi', price: 30000, unitPrice: 1},
  { name: 'Ice Tea', image: 'assets/icetea.jpg', type: 'non-kopi', price: 15000, unitPrice: 1},
  { name: 'Green Tea', image: 'assets/greentea.jpg', type: 'non-kopi', price: 20000, unitPrice: 1 },
  { name: 'Milkshake', image: 'assets/milkshake.jpg', type: 'non-kopi', price: 25000, unitPrice: 1},
  { name: 'Orange Juice', image: 'assets/orangejuice.jpg', type: 'non-kopi', price: 22000, unitPrice: 1},
  { name: 'Bamkuhein', image: 'assets/baumkuhein.jpg', type: 'snack', price: 15000, unitPrice: 1 },
  { name: 'Croissant', image: 'assets/croissant.jpg', type: 'snack', price: 10000, unitPrice: 1 },
  { name: 'Beef Burger', image: 'assets/beefburger.jpg', type: 'snack', price: 25000, unitPrice: 1 },
  { name: 'Sandwich', image: 'assets/sandwich.jpg', type: 'snack', price: 30000, unitPrice: 1 },
];
  cartItems: any[] = [];
  selectedSegment: string = ''; // Initialize with an empty string
  filteredMenus: any[] = [];
  clickCounts: { [key: string]: number } = {};

  constructor(
    private alertController: AlertController,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) { }

  async showTableNumberPrompt() {
    const alert = await this.alertController.create({
      header: 'Your Table Number',
      inputs: [
        {
          name: 'tableNumber',
          type: 'number',
          placeholder: 'Table Number',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'OK',
          handler: (data) => {
            this.tableNumber = data.tableNumber;
          },
        },
      ],
    });
    await alert.present();
  }

 

  addToCart(menu: any) {
    const existingItem = this.cartItems.find(item => item.name === menu.name);
    if (existingItem) {
      // Item already exists in the cart, ignore the addition
      return;
    }
    this.cartService.addToCart(menu);
    this.cartItems = this.cartService.getCartItems();
  }

  openCart() {
    this.router.navigate(['/cart']);
  }

  filterMenus() {
    if (this.selectedSegment === '') {
      this.filteredMenus = [];
    } else {
      this.filteredMenus = this.menus.filter(menu => menu.type === this.selectedSegment);
    }
  }

  get clickCountsTotal(): number {
    return Object.values(this.clickCounts).reduce((a, b) => a + b, 0);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.tableNumber = params['tableNumber'];
    });

    // Generate a random index within the range of available segments
    const randomIndex = Math.floor(Math.random() * this.menus.length);
    this.selectedSegment = this.menus[randomIndex].type;
    this.filterMenus();
  }
}