import { NgModule } from '@angular/core';

import { OnlyPositiveDirective } from './only-positive.directive';

@NgModule({
  declarations: [OnlyPositiveDirective],
  exports: [OnlyPositiveDirective]
})
export class OnlyPositiveModule {}
