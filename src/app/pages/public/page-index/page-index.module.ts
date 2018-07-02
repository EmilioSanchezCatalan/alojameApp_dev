import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageIndexComponent } from './page-index.component';
import { BrowserFilterModule } from '../../../components/browser-filter/browser.filter.module';
import { AloLoadSpinnerModule } from '../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [ PageIndexComponent ],
  imports: [
    BrowserFilterModule,
    AloLoadSpinnerModule,
    CommonModule
  ],
  exports: [ PageIndexComponent ]
})
export class PageIndexModule {}
