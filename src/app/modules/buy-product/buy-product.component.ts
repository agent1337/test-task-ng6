import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { takeWhile, switchMap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

import { BuyProductService } from './buy-product-service';
import { DetailedProduct, Extras, Item } from '../shared/interfaces/products-interface';
import { ExtrasExtended } from './extras-extended.interface';
import { ExtrasValidator } from './extras-validator/extras-validator';

@Component({
  selector: 'app-buy-product',
  templateUrl: './buy-product.component.html',
  styleUrls: ['./buy-product.component.scss'],
  providers: [NgxSpinnerService]
})
export class BuyProductComponent implements OnInit, OnDestroy {

  product: DetailedProduct;
  form: FormGroup;
  selectedExtras: ExtrasExtended[] = [];
  initialized = true;
  private alive = true;


  constructor(
    private fb: FormBuilder,
    private spinner: NgxSpinnerService,
    private router: Router,
    private route: ActivatedRoute,
    private buyProductService: BuyProductService) {
  }

  ngOnInit(): void {
    this.spinner.show();
    this.route.params
      .pipe(takeWhile(() => this.alive))
      .pipe(switchMap((param: any) => {
        return this.buyProductService.getProduct(param.id);
      })).subscribe((product: DetailedProduct) => {
        this.product = product;
        this.createGroup();
        this.spinner.hide();
      },
        (ex) => {
          console.log(`Error! ${ex}`);
          this.spinner.hide();
          this.goBack();
        });
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

  get fullPrice(): number {
    let extraPrice = 0;
    this.selectedExtras.forEach((extra: ExtrasExtended) => {
      extra.items.forEach((item: Item) => {
        extraPrice += item.price;
      });
    });
    return (this.product.price + extraPrice) * this.count;
  }

  get count(): number {
    return this.form.value.order;
  }

  buy(): void {
    this.buyProductService.buyProduct(this.form.value)
      .pipe(takeWhile(() => this.alive))
      .subscribe(() => {
        this.goBack();
      });
  }

  onCloseModal(): void {
    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }

  trackByFn(index, item): number | string {
    return item.id && index;
  }

  private createGroup(): void {
    const group = {
      id: [this.product.id, Validators.nullValidator],
      order: [{ value: this.product.order, disabled: false }, [Validators.nullValidator]],
      category: [this.product.category, Validators.nullValidator],
    };
    const extras: ExtrasExtended[] = [];
    this.form = this.fb.group(group);
    this.product.extras.forEach((item: Extras) => {
      const ex: ExtrasExtended = Object.assign({}, item);
      ex.options = ex.items;
      ex.items = [];
      extras.push(ex);
    });
    this.selectedExtras = extras;
    const control = new FormControl(
      // this.selectedExtras, Validators.compose([Validators.required, ExtrasValidator.ValidateExtras])
      this.selectedExtras, Validators.compose([ExtrasValidator.ValidateExtras])
    );
    this.form.addControl('extras', control);
    // this.form.get('extras').valueChanges.pipe(takeWhile(() => this.alive))
    //   .subscribe((val) => {
    //     console.log('CHAAADADA');
    //     // this.form.updateValueAndValidity();    // let extraPrice = 0;
    //     // val.forEach((extra: ExtrasExtended) => {
    //     //   extra.items.forEach((item: Item) => {
    //     //     extraPrice += item.price;
    //     //   });
    //     // });
    //     // this.fullPrice = this.product.price * this.product.order + extraPrice;
    //     // this.form
    //     // console.log('changes!!!', val);
    //   });
    this.initialized = true;
  }

}
