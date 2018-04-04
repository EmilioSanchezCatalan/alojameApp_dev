import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './private-owner-routing.module';
import { PageOwnHomesModule } from './page-own-homes/page-own-homes.module';
@NgModule({
  imports: [
    PublicRoutingModule,
    PageOwnHomesModule
  ]
})
export class PrivateOwnerModule {}
