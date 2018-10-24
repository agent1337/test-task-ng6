import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import { ProductsModule } from './modules/products/products.module';

const routes: Routes = [
  // {
  //   path: '**',
  //   redirectTo: 'products',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: './modules/products/products.module#ProductsModule',
    // loadChildren: async () => (await import('./modules/products/products.module')).ProductsModule,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
