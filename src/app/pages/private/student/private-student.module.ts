import { NgModule } from '@angular/core';

import { PrivateStudentRoutingModule } from './private-student-routing.module';
import { PageSubsHomesModule } from './page-subs-homes/page-subs-homes.module';

@NgModule({
  imports: [
    PrivateStudentRoutingModule,
    PageSubsHomesModule
  ]
})
export class PrivateStudentModule {}
