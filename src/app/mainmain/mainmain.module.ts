import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainmainPageRoutingModule } from './mainmain-routing.module';

import { MainmainPage } from './mainmain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainmainPageRoutingModule
  ],
  declarations: [MainmainPage]
})
export class MainmainPageModule {}
