import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';

import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  declarations: [ModalComponent],
  entryComponents: [ModalComponent],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    ModalComponent
  ],
  providers: []
})
export class SharedModule { }
