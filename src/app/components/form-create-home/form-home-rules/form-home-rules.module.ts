import { NgModule } from '@angular/core';
import { MatRadioModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { FormHomeRulesComponent } from './form-home-rules.component';
import { FormNewRuleModule } from '../../form-new-rule/form-new-rule.module';

@NgModule({
  declarations: [FormHomeRulesComponent],
  imports: [
    MatRadioModule,
    FormNewRuleModule,
    FormsModule
  ],
  exports: [FormHomeRulesComponent]
})
export class  FormHomeRulesModule {}
