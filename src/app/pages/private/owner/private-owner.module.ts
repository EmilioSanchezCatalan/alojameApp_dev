import { NgModule } from '@angular/core';

import { PublicRoutingModule } from './private-owner-routing.module';
import { PageOwnHomesModule } from './page-own-homes/page-own-homes.module';
import { PageOwnHomeModule } from './page-own-home/show/page-own-home.module';
import { PageOwnHomeStudentModule } from './page-own-home/students/page-own-home-students.module';

@NgModule({
  imports: [
    PublicRoutingModule,
    PageOwnHomesModule,
    PageOwnHomeModule,
    PageOwnHomeStudentModule
  ]
})
export class PrivateOwnerModule {}
