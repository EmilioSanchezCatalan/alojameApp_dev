import { NgModule } from '@angular/core';

import { PrivateOwnerRoutingModule } from './private-owner-routing.module';
import { PageOwnHomesModule } from './page-own-homes/page-own-homes.module';
import { PageOwnHomeModule } from './page-own-home/show/page-own-home.module';
import { PageOwnHomeStudentModule } from './page-own-home/students/page-own-home-students.module';
import { PageOwnHomeCreate } from './page-own-home/create/page-own-home-create.module';
import { PageOwnHomeEditModule } from './page-own-home/edit/page-own-home-edit.module';
import { PageOwnMessagesModule } from './page-own-messages/page-own-messages.module';
import { PageOwnMessageModule } from './page-own-message/page-own-message.module';
import { PageOwnValorationsModule } from './page-own-valorations/page-own-valorations.module';
import { PageOwnProfileConfModule } from './page-own-profile-conf/page-own-profile-conf.module';
import { PageOwnProfileShowModule } from './page-own-profile-show/page-own-profile-show.module';
import { PageProfileShowModule } from './page-profile-show/page-profile-show.module';

@NgModule({
  imports: [
    PrivateOwnerRoutingModule,
    PageOwnHomesModule,
    PageOwnHomeModule,
    PageOwnHomeStudentModule,
    PageOwnHomeCreate,
    PageOwnMessagesModule,
    PageOwnMessageModule,
    PageOwnValorationsModule,
    PageOwnProfileConfModule,
    PageOwnHomeEditModule,
    PageOwnProfileShowModule,
    PageProfileShowModule
  ]
})
export class PrivateOwnerModule {}
