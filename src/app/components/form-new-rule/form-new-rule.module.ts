import { NgModule } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormNewRuleComponent } from './form-new-rule.component';
import { TypeRuleModule } from '../../pipes/type-rule/type-rule.module';

@NgModule({
  declarations: [FormNewRuleComponent],
  imports: [
    MatSlideToggleModule,
    CommonModule,
    FormsModule,
    TypeRuleModule
  ],
  exports: [FormNewRuleComponent]
})
export class FormNewRuleModule {}
