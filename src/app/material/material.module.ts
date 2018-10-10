import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import {
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatSelectModule,
  MatTabsModule
} from '@angular/material';

@NgModule({
  imports: [
    // CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
