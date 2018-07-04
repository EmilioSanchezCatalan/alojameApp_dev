import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageSubsHomesComponent } from './page-subs-homes.component';
import { ToolbarStudentModule } from '../../../../components/toolbar-student/toolbar-student.module';
import { GridHomesModule } from '../../../../components/grid-homes/grid-homes.module';
import { AloLoadSpinnerModule } from '../../../../components/alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [PageSubsHomesComponent],
  imports: [
    ToolbarStudentModule,
    GridHomesModule,
    AloLoadSpinnerModule,
    CommonModule
  ],
  exports: [PageSubsHomesComponent]
})
export class PageSubsHomesModule {}
