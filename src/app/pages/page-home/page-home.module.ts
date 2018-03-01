import { NgModule } from '@angular/core';
import { PageHomeComponent } from './page-home.component';
import { BrowserFilterModule } from '../../components/browser-filter/browser.filter.module';

@NgModule({
  declarations: [ PageHomeComponent ],
  imports: [ BrowserFilterModule ],
  exports: [ PageHomeComponent ]
})
export class PageHomeModule {}
