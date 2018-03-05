import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './public-routing.module';
import { PageHomeModule } from './page-home/page-home.module';
import { PageLhomesModule } from './page-lhomes/pages-lhomes.module';

@NgModule({
  imports: [
    PublicRoutingModule,
    PageHomeModule,
    PageLhomesModule
  ]
})
export class PublicModule {}
