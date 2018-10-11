import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material/material.module';

import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    CartComponent,
    CartItemComponent
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
