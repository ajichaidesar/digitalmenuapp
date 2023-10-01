import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { MenuPage } from '../menu/menu.page';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
})
export class HomescreenPage implements OnInit {
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToMenuPage() {
    this.navCtrl.navigateForward('/menu');
  }
}