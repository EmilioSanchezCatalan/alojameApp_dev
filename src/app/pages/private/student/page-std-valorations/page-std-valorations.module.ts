import { NgModule } from '@angular/core';

import { PageStdValorationsComponent } from './page-std-valorations.component';
import { ToolbarStudentModule } from '../../../../components/toolbar-student/toolbar-student.module';
import { ListValorationsModule } from '../../../../components/list-valorations/list-valorations.module';
import { AloPaginationModule } from '../../../../components/alo-pagination/alo-pagination.module';

@NgModule({
  declarations: [PageStdValorationsComponent],
  imports: [
    ToolbarStudentModule,
    ListValorationsModule,
    AloPaginationModule
  ],
  exports: [PageStdValorationsComponent]
})
export class PageStdValorationsModule {}
