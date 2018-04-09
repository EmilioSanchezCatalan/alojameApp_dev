import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ToolbarOwnerComponent } from './toolbar-owner.component';

@NgModule({
  declarations: [ToolbarOwnerComponent],
  imports: [RouterModule],
  exports: [ToolbarOwnerComponent]
})
export class ToolbarOwnerModule {}
