/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: configure the list of home services
 */
import { Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';

import { FormCreateHome } from '../../../interfaces/formCreateHome';
import { BasicTable } from '../../../interfaces/basic-table';


@Component({
  selector: 'alo-form-home-services',
  templateUrl: './form-home-services.component.html',
  styleUrls: ['./form-home-services.component.css']
})
export class FormHomeServicesComponent implements OnInit, OnChanges {

  @Input() inputData: FormCreateHome;
  @Input() activeResult: boolean;
  @Input() homeServices: Array<BasicTable>;
  @Output() sendInfo: EventEmitter<any>;

  public formData: Array<any>;

  constructor() {
    this.sendInfo = new EventEmitter();
    this.formData = new Array();
  }

  ngOnInit() {
    for ( let i = 0; i < this.homeServices.length; i++) {
      this.formData.push({
        id: this.homeServices[i].id,
        isChecked: false
      });
    }
    if (this.inputData.services) {
      this.formData = this.inputData.services.slice();
    }
  }

  ngOnChanges() {
    console.log('entra en cambio');
    if (this.activeResult === true) {
      setTimeout(() => {
        this.sendInfo.emit(this.formData);
      });
    }
  }

  /**
   * Change the  status of the service on the formData recolect
   * @param {number} pos postion of the service on the array
   */
  public changeCheckBoxStatus(pos: number): void {
    this.formData[pos].isChecked = this.formData[pos].isChecked === true ? false : true;
  }


}
