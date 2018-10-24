import { Component, Input } from '@angular/core';

import { Product } from 'src/app/modules/shared/interfaces/products-interface';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {

  @Input()
  product: Product;

  constructor() {}
}
