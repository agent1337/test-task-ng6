import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products-service';
import { ProductItemComponent } from './product-item/product-item.component';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [ProductsRoutingModule],
  providers: [ProductsService],
  declarations: [ProductsComponent, ProductItemComponent]
})
export class ProductsModule { }
