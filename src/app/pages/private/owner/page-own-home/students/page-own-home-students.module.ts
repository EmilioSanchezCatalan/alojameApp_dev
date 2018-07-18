import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOwnHomeStudentsComponent } from './page-own-home-students.component';
import { RoomersControlModule } from '../../../../../components/roomers-control/roomers-control.module';
import { RoomersRequestModule } from '../../../../../components/roomers-request/roomers-request.module';
import { AloLoadSpinnerModule } from '../../../../../components/alo-load-spinner/alo-load-spinner.module';


@NgModule({
  declarations: [PageOwnHomeStudentsComponent],
  imports: [
    RoomersControlModule,
    RoomersRequestModule,
    AloLoadSpinnerModule,
    CommonModule
  ],
  exports: [PageOwnHomeStudentsComponent]
})
export class PageOwnHomeStudentModule {}
