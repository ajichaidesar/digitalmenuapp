import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage {
  constructor(private navCtrl: NavController) {}

  lihatMenu() {
    // Logika untuk berpindah ke halaman menu
    // Anda dapat menggunakan NavController untuk navigasi
    this.navCtrl.navigateForward('/home'); // Gantilah '/menu' dengan rute halaman menu Anda.
  }
}
