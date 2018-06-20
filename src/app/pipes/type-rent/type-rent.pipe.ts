import { Pipe, PipeTransform } from '@angular/core';

import { RENT } from '../../const/type-rent.const';

@Pipe({
  name: 'typeRent'
})
export class TypeRentPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case RENT.ALL: return 'Propiedad completa';
      case RENT.ROOM: return 'Habitación';
      case RENT.BED: return 'Cama';
    }
  }

}
