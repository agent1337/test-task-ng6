import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { ProductsService } from './products-service';
import { Product, Products } from 'src/app/modules/shared/interfaces/products-interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy {

  products: Product[];

  private sub: Subscription = new Subscription();

  constructor(private productsService: ProductsService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.productsService.getProducts()
      .subscribe((response: Products) => {
        this.products = response.products;
        this.spinner.hide();
      },
        (ex) => {
          this.spinner.hide();
          console.log(`Error! ${ex}`);
        }
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  trackByFn(index, item): number | string {
    return item.id && index;
  }

}
