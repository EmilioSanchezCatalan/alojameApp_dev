/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: configure the list of home rules
 */
 import { Component, OnInit, OnChanges, Input, Output, EventEmitter} from '@angular/core';

 import { FormCreateHome } from '../../../interfaces/formCreateHome';


@Component({
  selector: 'alo-form-home-rules',
  templateUrl: './form-home-rules.component.html',
  styleUrls: ['./form-home-rules.component.css']
})
export class FormHomeRulesComponent implements OnInit, OnChanges {

  @Input() inputData: FormCreateHome;
  @Input() activeResult: boolean;
  @Output() sendInfo: EventEmitter<any>;

  public formData: {
    pets: string;
    smokers: string;
    listRules: Array<{
      rule: string;
      type: number;
    }>
  };

  constructor() {
    this.sendInfo = new EventEmitter();
    this.formData = {
      pets: '',
      smokers: '',
      listRules: []
    };
  }

  ngOnInit() {
    if (this.inputData) {
      if ( this.inputData.pets !== null && this.inputData.smokers !== null) {
        this.formData.pets = this.inputData.pets.toString();
        this.formData.smokers = this.inputData.smokers.toString();
        this.formData.listRules = this.inputData.listRules.slice();
      }
    }
  }

  ngOnChanges() {
    if (this.activeResult === true) {
      setTimeout( () => {
        this.sendInfo.emit(this.formData);
      });
    }
  }

  /**
   * Get the custom home rules
   */
  public getHomeRules( event: any): void {
    if (event) {
      this.formData.listRules = event.items.slice();
    }
  }
}
