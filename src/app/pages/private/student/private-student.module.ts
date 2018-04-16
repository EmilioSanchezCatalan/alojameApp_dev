import { NgModule } from '@angular/core';

import { PrivateStudentRoutingModule } from './private-student-routing.module';
import { PageSubsHomesModule } from './page-subs-homes/page-subs-homes.module';
import { PageHomeModule } from './page-home/page-home.module';
import { PageStdMessagesModule } from './page-std-messages/page-std-messages.module';
import { PageStdMessageModule } from './page-std-message/page-std-message.module';
import { PageStdValorationsModule } from './page-std-valorations/page-std-valorations.module';

@NgModule({
  imports: [
    PrivateStudentRoutingModule,
    PageSubsHomesModule,
    PageHomeModule,
    PageStdMessagesModule,
    PageStdMessageModule,
    PageStdValorationsModule
  ]
})
export class PrivateStudentModule {}
