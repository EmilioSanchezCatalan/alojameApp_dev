/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: change the code of typeRule into a complete text
 */

import { Pipe, PipeTransform } from '@angular/core';

import { RULE } from '../../const/type-rule.const';

@Pipe({
  name: 'typeRule'
})
export class TypeRulePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === RULE.OWNER ? 'Propietario' : 'Comunidad';
  }

}
