import { NgModule } from '@angular/core';

import { PageStdMessagesComponent } from './page-std-messages.component';
import { ToolbarStudentModule } from '../../../../components/toolbar-student/toolbar-student.module';
import { ListMessagesModule } from '../../../../components/list-messages/list-messages.module';
import { AloPaginationModule } from '../../../../components/alo-pagination/alo-pagination.module';

@NgModule({
  declarations: [PageStdMessagesComponent],
  imports: [
    ToolbarStudentModule,
    ListMessagesModule,
    AloPaginationModule
  ],
  exports: [PageStdMessagesComponent]
})
export class PageStdMessagesModule {}
