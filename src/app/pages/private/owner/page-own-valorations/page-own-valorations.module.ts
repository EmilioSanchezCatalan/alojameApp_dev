import { NgModule } from '@angular/core';

import { PageOwnValorationsComponent } from './page-own-valorations.component';
import { ToolbarOwnerModule } from '../../../../components/toolbar-owner/toolbar-owner.module';
import { ListValorationsModule } from '../../../../components/list-valorations/list-valorations.module';
import { AloPaginationModule } from '../../../../components/alo-pagination/alo-pagination.module';

@NgModule({
  declarations: [PageOwnValorationsComponent],
  imports: [
    ListValorationsModule,
    ToolbarOwnerModule,
    AloPaginationModule
  ],
  exports: [PageOwnValorationsComponent]
})
export class PageOwnValorationsModule {}
