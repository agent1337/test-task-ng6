import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ExtrasExtended } from '../extras-extended.interface';

const noop = () => {};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ExtrasComponent),
  multi: true
};

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.scss'],
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ExtrasComponent {
  private innerValue: ExtrasExtended[];
  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: ExtrasExtended[]) => void = noop;

  get value(): ExtrasExtended[] {
    return this.innerValue;
  }

  set value(v: ExtrasExtended[]) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  onChange($event): void {
    this.value = $event;
  }

  onBlur(): void {
    this.onTouchedCallback();
  }

  writeValue(value: ExtrasExtended[]): void {
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

  selectionChanged(): void {
    this.onChangeCallback(this.value);
  }

  trackByFn(index, item): number | string {
    return item.id && index;
  }

  constructor() {}
}
