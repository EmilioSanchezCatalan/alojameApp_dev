import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToolbarStudentComponent } from './toolbar-student.component';

@NgModule({
  declarations: [ToolbarStudentComponent],
  imports: [RouterModule],
  exports: [ToolbarStudentComponent]
})
export class ToolbarStudentModule {}
