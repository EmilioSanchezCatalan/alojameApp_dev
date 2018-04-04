import { NgModule } from '@angular/core';

import { PageOwnHomesComponent } from './page-own-homes.component';
import { ToolbarOwnerModule } from '../../../../components/toolbar-owner/toolbar-owner.module';
import { GridHomesModule } from '../../../../components/grid-homes/grid-homes.module';

@NgModule({
  declarations: [PageOwnHomesComponent],
  imports: [
    ToolbarOwnerModule,
    GridHomesModule
  ],
  exports: [PageOwnHomesComponent]
})
export class PageOwnHomesModule {}
