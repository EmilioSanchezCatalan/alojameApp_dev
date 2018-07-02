import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserFilterComponent } from './browser-filter.component';
import { MatSnackBarModule, MatAutocompleteModule } from '@angular/material';

@NgModule({
  declarations: [ BrowserFilterComponent ],
  imports: [
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    CommonModule
  ],
  exports: [ BrowserFilterComponent ]
})
export class BrowserFilterModule {}
