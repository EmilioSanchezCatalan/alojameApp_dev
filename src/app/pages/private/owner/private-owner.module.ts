import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './private-owner-routing.module';
import { PageOwnHomesModule } from './page-own-homes/page-own-homes.module';
import { PageOwnHomeModule } from './page-own-home/show/page-own-home.module';

@NgModule({
  imports: [
    PublicRoutingModule,
    PageOwnHomesModule,
    PageOwnHomeModule
  ]
})
export class PrivateOwnerModule {}
