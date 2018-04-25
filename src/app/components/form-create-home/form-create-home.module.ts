import { NgModule } from '@angular/core';

import { FormHomeTypeModule } from './form-home-type/form-home-type.module';
import { FormHomeRoomsModule } from './form-home-rooms/form-home-rooms.module';
import { FormHomeServicesModule } from './form-home-services/form-home-services.module';
import { FormHomeAddressModule } from './form-home-address/form-home-address.module';
import { FormHomeRulesModule } from './form-home-rules/form-home-rules.module';
import { FormHomeAdModule } from './form-home-ad/form-home-ad.module';
import { FormHomeImgsModule } from './form-home-imgs/form-home-imgs.module';
import { FormFinishModule } from './form-finish/form-finish.module';

@NgModule({
  imports: [
    FormHomeTypeModule,
    FormHomeRoomsModule,
    FormHomeServicesModule,
    FormHomeAddressModule,
    FormHomeRulesModule,
    FormHomeAdModule,
    FormHomeImgsModule,
    FormFinishModule
  ],
  exports: [
    FormHomeTypeModule,
    FormHomeRoomsModule,
    FormHomeServicesModule,
    FormHomeAddressModule,
    FormHomeRulesModule,
    FormHomeAdModule,
    FormHomeImgsModule,
    FormFinishModule
  ]
})
export class FormCreateHomeModule {}
