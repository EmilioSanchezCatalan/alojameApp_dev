import { NgModule } from '@angular/core';
import { MatProgressBarModule, MatRadioModule} from '@angular/material';
import { CommonModule } from '@angular/common';

import { PageOwnHomeCreateComponent } from './page-own-home-create.component';
import { FormCreateHomeModule } from '../../../../../components/form-create-home/form-create-home.module';
import { FormCreateBarModule } from '../../../../../components/form-create-bar/form-create-bar.module';

@NgModule({
  declarations: [PageOwnHomeCreateComponent],
  imports: [
    MatProgressBarModule,
    MatRadioModule,
    FormCreateHomeModule,
    FormCreateBarModule,
    CommonModule
  ],
  exports: [PageOwnHomeCreateComponent]
})
export class PageOwnHomeCreate {}
