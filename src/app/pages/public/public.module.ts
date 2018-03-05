import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PageIndexModule } from './page-index/page-index.module';
import { PageLhomesModule } from './page-lhomes/pages-lhomes.module';

@NgModule({
  imports: [
    PublicRoutingModule,
    PageIndexModule,
    PageLhomesModule
  ]
})
export class PublicModule {}
