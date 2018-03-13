import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PageIndexModule } from './page-index/page-index.module';
import { PageLhomesModule } from './page-lhomes/pages-lhomes.module';
import { PageHomeModule } from './page-home/page-home.module';

@NgModule({
  imports: [
    PublicRoutingModule,
    PageIndexModule,
    PageLhomesModule,
    PageHomeModule
  ]
})
export class PublicModule {}
