import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'buy',
        // loadChildren: async () => (await import('../buy-product/buy-product.module')).BuyProductModule,
        loadChildren: '../buy-product/buy-product.module#BuyProductModule',
      }
    ]
  },
  // {
  //   path: 'buy',
  //   children: [
  //     {
  //       path: '',
  //       // loadChildren: async () => (await import('../buy-product/buy-product.module')).BuyProductModule,
  //       loadChildren: '../buy-product/buy-product.module#BuyProductModule',
  //     }
  //   ]
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
