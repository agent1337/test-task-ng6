import { AbstractControl } from '@angular/forms';

import { ExtrasExtended } from '../extras-extended.interface';

export class ExtrasValidator {
  static ValidateExtras(control: AbstractControl) {
    const value: ExtrasExtended[] = control.value;
    let valid = true;
    value.every((val: ExtrasExtended) => {
      const count = val.items.length;
      if (!(val.min <= count && val.max >= count)) {
        valid = false;
        return false;
      }
    });
    return valid ? null : { Error: true };
  }
}


