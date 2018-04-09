import { NgModule } from '@angular/core';

import { PageOwnHomeStudentsComponent } from './page-own-home-students.component';
import { RoomersControlModule } from '../../../../../components/roomers-control/roomers-control.module';
import { RoomersRequestModule } from '../../../../../components/roomers-request/roomers-request.module';

@NgModule({
  declarations: [PageOwnHomeStudentsComponent],
  imports: [
    RoomersControlModule,
    RoomersRequestModule
  ],
  exports: [PageOwnHomeStudentsComponent]
})
export class PageOwnHomeStudentModule {}
