import { NgModule } from '@angular/core';

import { PrivateStudentRoutingModule } from './private-student-routing.module';
import { PageSubsHomesModule } from './page-subs-homes/page-subs-homes.module';
import { PageStdHomeModule } from './page-std-home/page-std-home.module';
import { PageStdMessagesModule } from './page-std-messages/page-std-messages.module';
import { PageStdMessageModule } from './page-std-message/page-std-message.module';
import { PageStdValorationsModule } from './page-std-valorations/page-std-valorations.module';
import { PageSearchHomesModule } from './page-search-homes/page-search-homes.module';
import { PageHomeModule } from './page-home/page-home.module';
import { PageMyHomeModule } from './page-my-home/page-my-home.module';
import { PageStdProfileConfModule } from './page-std-profile-conf/page-std-profile-conf.module';
import { PageStdProfileModule } from './page-std-profile/page-std-profile.module';
import { PageStdProfileShowModule } from './page-std-profile-show/page-std-profile-show.module';

@NgModule({
  imports: [
    PrivateStudentRoutingModule,
    PageSubsHomesModule,
    PageStdHomeModule,
    PageStdMessagesModule,
    PageStdMessageModule,
    PageStdValorationsModule,
    PageSearchHomesModule,
    PageHomeModule,
    PageMyHomeModule,
    PageStdProfileConfModule,
    PageStdProfileModule,
    PageStdProfileShowModule
  ]
})
export class PrivateStudentModule {}
