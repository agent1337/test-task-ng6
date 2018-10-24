import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ProductsCountComponent),
  multi: true
};

@Component({
  selector: 'app-products-count',
  templateUrl: './products-count.component.html',
  styleUrls: ['./products-count.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ProductsCountComponent {
  private innerValue: number;
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: number) => void = noop;

  @Input()
  min: 1;
  @Input()
  max: 10;

  get value(): number {
    return this.innerValue;
  }

  set value(v: number) {
    if (v !== this.innerValue && v >= this.min && v <= this.max) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  changeCount(num = 1) {
    this.value += num;
  }

  onChange($event): void {
    this.value = $event;
  }

  onBlur(): void {
    this.onTouchedCallback();
  }

  writeValue(value: number): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }
}
