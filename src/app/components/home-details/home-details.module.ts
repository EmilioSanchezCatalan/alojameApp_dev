import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material';

import { HomeDetailsComponent } from './home-details.component';

@NgModule({
  declarations: [ HomeDetailsComponent ],
  imports: [ MatExpansionModule ],
  exports: [ HomeDetailsComponent ]
})
export class HomeDetailsModule {}
