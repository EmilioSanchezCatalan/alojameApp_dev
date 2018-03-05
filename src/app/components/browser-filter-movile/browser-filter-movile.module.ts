import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserFilterMovileComponent } from './browser-filter-movile.component';

@NgModule({
  declarations: [ BrowserFilterMovileComponent ],
  imports: [
    MatSnackBarModule,
    FormsModule,
    RouterModule
  ],
  exports: [ BrowserFilterMovileComponent ]
})
export class BrowserFilterMovileModule {}
