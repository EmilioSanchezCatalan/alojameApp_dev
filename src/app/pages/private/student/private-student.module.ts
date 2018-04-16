import { NgModule } from '@angular/core';

import { PrivateStudentRoutingModule } from './private-student-routing.module';
import { PageSubsHomesModule } from './page-subs-homes/page-subs-homes.module';
import { PageHomeModule } from './page-home/page-home.module';

@NgModule({
  imports: [
    PrivateStudentRoutingModule,
    PageSubsHomesModule,
    PageHomeModule
  ]
})
export class PrivateStudentModule {}
