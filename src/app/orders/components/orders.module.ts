import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessOrderFormComponent } from './process-order-form/process-order-form.component';
import { MaterialModule } from '../../material/material.module';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    ProcessOrderFormComponent
  ],
  exports: [
    ProcessOrderFormComponent
  ]
})
export class OrdersModule { }
