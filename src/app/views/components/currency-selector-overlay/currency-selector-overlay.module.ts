import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencySelectorOverlayComponent } from './currency-selector-overlay.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CurrencySelectorOverlayComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    CurrencySelectorOverlayComponent,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class CurrencySelectorOverlayModule {}
