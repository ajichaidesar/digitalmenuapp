import { Component, Inject } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.page.html',
  styleUrls: ['./homescreen.page.scss'],
})
export class HomescreenPage {
  tableNumber: number = 0;

  constructor(
    private alertController: AlertController,
    private navCtrl: NavController,
    private router: Router,
    @Inject(DataService) private dataService: DataService
  ) {}

  goToMenuPage() {
    this.router.navigate(['/menu'], { queryParams: { tableNumber: this.tableNumber } });
  }

  async showTableNumberPrompt() {
    const alert = await this.alertController.create({
      header: 'Nomor Meja Anda',
      inputs: [
        {
          name: 'tableNumber',
          type: 'number',
          placeholder: 'Nomor Meja',
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
            this.goToMenuPage();
          },
        },
      ],
    });
    await alert.present();
  }
}