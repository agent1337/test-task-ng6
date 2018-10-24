import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ExtrasExtended } from '../extras-extended.interface';
import { Item } from '../../shared/interfaces/products-interface';

@Component({
  selector: 'app-extras-item',
  templateUrl: './extras-item.component.html',
  styleUrls: ['./extras-item.component.scss'],
})
export class ExtrasItemComponent {

  @Input()
  data: ExtrasExtended;

  @Output()
  selectionChanged: EventEmitter<any> = new EventEmitter();

  get isRequired(): boolean {
    return this.data.min > 0;
  }

  get inputType(): 'radio' | 'checkbox' {
    return this.data.max > 1 ? 'checkbox' : 'radio';
  }

  get canReset(): boolean {
    return this.data.items.length > 0 && (!this.isRequired || this.data.min > 1);
  }

  isChecked(item: Item): boolean {
    return this.data.items.filter(x => x === item).length > 0;
  }

  onSelectionChange($event: any, item: Item): void {
    if (this.data.items.length >= this.data.max && $event.target.checked && this.inputType !== 'radio') {
      this.data.items = this.data.items.filter(x => x !== item);
      return;
    }
    if ($event.target.checked) {
      if (this.inputType !== 'radio') {
        this.data.items.push(item);
      } else {
        this.data.items = [item];
      }
    } else {
      this.data.items = this.data.items.filter(x => x !== item);
    }
    this.selectionChanged.emit();
  }

  reset(): void {
    this.data.items = [];
  }

  trackByFn(index, item): number | string {
    return item.id && index;
  }
}
