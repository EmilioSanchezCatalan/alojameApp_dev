/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: component in order to configure the list of rooms on the home
 */
import { Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';

import { FormCreateHome } from '../../../interfaces/formCreateHome';

@Component({
  selector: 'alo-form-home-rooms',
  templateUrl: './form-home-rooms.component.html',
  styleUrls: ['./form-home-rooms.component.css']
})
export class FormHomeRoomsComponent implements OnInit, OnChanges {

  @Input() inputData: FormCreateHome;
  @Input() activeResult: boolean;
  @Output() sendInfo: EventEmitter<any>;

  public formData: any;

  constructor() {
    this.sendInfo = new EventEmitter();
    this.formData = {
      nKitchen: null,
      nBedRoom: null,
      nBathRoom: null,
      nLivingRoom: null
    };
  }

  ngOnInit() {
    if (this.inputData) {
      this.formData.nBedRoom = this.inputData.nBedRoom;
      this.formData.nKitchen = this.inputData.nKitchen;
      this.formData.nBathRoom = this.inputData.nBathRoom;
      this.formData.nLivingRoom = this.inputData.nLivingRoom;
    }
  }

  ngOnChanges() {
    if (this.activeResult === true) {
      setTimeout( () => {
        this.sendInfo.emit(this.formData);
      });
    }
  }

}
