import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';

import { FormCreateHome } from '../../../interfaces/formCreateHome';

@Component({
  selector: 'alo-form-home-description',
  templateUrl: './form-home-description.component.html',
  styleUrls: ['./form-home-description.component.css']
})
export class FormHomeDescriptionComponent implements OnInit, OnChanges {

  @Input() inputData: FormCreateHome;
  @Input() activeResult: boolean;
  @Output() sendInfo: EventEmitter<any>;

  public formData: any;

  constructor() {
    this.sendInfo = new EventEmitter();
  }

  ngOnInit() {
    if (this.inputData) {
      this.formData = this.inputData.description;
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
