import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserBasicInfoComponent } from './user-basic-info.component';

@NgModule({
  declarations: [UserBasicInfoComponent],
  imports: [CommonModule],
  exports: [UserBasicInfoComponent]
})
export class UserBasicInfoModule {}
