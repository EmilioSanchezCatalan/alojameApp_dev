import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserFilterMovileComponent } from './browser-filter-movile.component';

@NgModule({
  declarations: [ BrowserFilterMovileComponent ],
  imports: [
    MatSnackBarModule,
    FormsModule
  ],
  exports: [ BrowserFilterMovileComponent ]
})
export class BrowserFilterMovileModule {}
