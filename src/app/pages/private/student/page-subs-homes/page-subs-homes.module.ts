import { NgModule } from '@angular/core';

import { PageSubsHomesComponent } from './page-subs-homes.component';
import { ToolbarStudentModule } from '../../../../components/toolbar-student/toolbar-student.module';
import { GridHomesModule } from '../../../../components/grid-homes/grid-homes.module';

@NgModule({
  declarations: [PageSubsHomesComponent],
  imports: [
    ToolbarStudentModule,
    GridHomesModule
  ],
  exports: [PageSubsHomesComponent]
})
export class PageSubsHomesModule {}
