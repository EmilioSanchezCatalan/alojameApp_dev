import { NgModule } from '@angular/core';
import { PageIndexComponent } from './page-index.component';
import { BrowserFilterModule } from '../../../components/browser-filter/browser.filter.module';
import { BrowserFilterMovileModule } from '../../../components/browser-filter-movile/browser-filter-movile.module';

@NgModule({
  declarations: [ PageIndexComponent ],
  imports: [
    BrowserFilterModule,
    BrowserFilterMovileModule
  ],
  exports: [ PageIndexComponent ]
})
export class PageIndexModule {}
