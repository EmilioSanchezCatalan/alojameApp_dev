import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserFilterComponent } from './browser-filter.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [ BrowserFilterComponent ],
  imports: [
    FormsModule,
    MatSnackBarModule
  ],
  exports: [ BrowserFilterComponent ]
})
export class BrowserFilterModule {}
