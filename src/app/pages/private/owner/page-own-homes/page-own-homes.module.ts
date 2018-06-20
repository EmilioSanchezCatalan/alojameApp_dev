import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageOwnHomesComponent } from './page-own-homes.component';
import { ToolbarOwnerModule } from '../../../../components/toolbar-owner/toolbar-owner.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';
import { GridHomesModule } from '../../../../components/grid-homes/grid-homes.module';

@NgModule({
  declarations: [PageOwnHomesComponent],
  imports: [
    ToolbarOwnerModule,
    GridHomesModule,
    AloLoadSpinnerModule,
    CommonModule
  ],
  exports: [PageOwnHomesComponent]
})
export class PageOwnHomesModule {}
