import { NgModule } from '@angular/core';

import { PageOwnMessagesComponent } from './page-own-messages.component';
import { ToolbarOwnerModule } from '../../../../components/toolbar-owner/toolbar-owner.module';
import { ListMessagesModule } from '../../../../components/list-messages/list-messages.module';
import { AloPaginationModule } from '../../../../components/alo-pagination/alo-pagination.module';

@NgModule({
  declarations: [PageOwnMessagesComponent],
  imports: [
    ToolbarOwnerModule,
    ListMessagesModule,
    AloPaginationModule
  ],
  exports: [PageOwnMessagesComponent]
})
export class PageOwnMessagesModule {}
