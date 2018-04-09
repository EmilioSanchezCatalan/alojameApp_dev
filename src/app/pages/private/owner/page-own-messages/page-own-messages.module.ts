import { NgModule } from '@angular/core';

import { PageOwnMessagesComponent } from './page-own-messages.component';
import { ToolbarOwnerModule } from '../../../../components/toolbar-owner/toolbar-owner.module';
import { ListMessagesModule } from '../../../../components/list-messages/list-messages.module';

@NgModule({
  declarations: [PageOwnMessagesComponent],
  imports: [
    ToolbarOwnerModule,
    ListMessagesModule
  ],
  exports: [PageOwnMessagesComponent]
})
export class PageOwnMessagesModule {}
