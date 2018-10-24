import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { BuyProductRoutingModule } from './buy-product-routing.module';
import { BuyProductComponent } from './buy-product.component';
import { SharedModule } from '../shared/shared.module';
import { BuyProductService } from './buy-product-service';
import { ExtrasComponent } from './extras/extras.component';
import { ExtrasItemComponent } from './extras-item/extras-item.component';
import { ProductsCountComponent } from './products-count/products-count.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    SharedModule,
    BuyProductRoutingModule
  ],
  providers: [BuyProductService],
  declarations: [BuyProductComponent, ExtrasComponent, ExtrasItemComponent, ProductsCountComponent]
})
export class BuyProductModule { }
