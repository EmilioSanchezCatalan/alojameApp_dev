import { NgModule } from '@angular/core';
import { PageHomeComponent } from './page-home.component';
import { BrowserFilterModule } from '../../components/browser-filter/browser.filter.module';
import { BrowserFilterMovileModule } from '../../components/browser-filter-movile/browser-filter-movile.module';
@NgModule({
  declarations: [ PageHomeComponent ],
  imports: [
    BrowserFilterModule,
    BrowserFilterMovileModule
  ],
  exports: [ PageHomeComponent ]
})
export class PageHomeModule {}
