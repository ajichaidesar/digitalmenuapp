import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AmericanoPageRoutingModule } from './americano-routing.module';

import { AmericanoPage } from './americano.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AmericanoPageRoutingModule
  ],
  declarations: [AmericanoPage]
})
export class AmericanoPageModule {}
