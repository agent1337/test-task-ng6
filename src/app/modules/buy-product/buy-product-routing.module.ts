import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuyProductComponent } from './buy-product.component';

const routes: Routes = [
  {
    path: ':id',
    component: BuyProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuyProductRoutingModule { }
