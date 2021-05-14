import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainmainPage } from './mainmain.page';

const routes: Routes = [
  {
    path: '',
    component: MainmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainmainPageRoutingModule {}
