/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: form with a personal information
 */
import { Component, Input, AfterContentInit, OnChanges, Output, EventEmitter} from '@angular/core';

import { User } from '../../interfaces/user';
import { BasicTable } from '../../interfaces/basic-table';

declare var $: any;

@Component({
  selector: 'alo-form-personal-info',
  templateUrl: './form-personal-info.component.html',
  styleUrls: ['./form-personal-info.component.css']
})
export class FormPersonalInfoComponent implements AfterContentInit, OnChanges {

  @Input() inputData: User;
  @Input() countries: Array<BasicTable>;
  @Input() activeResult: boolean;
  @Output() sendInfo: EventEmitter<any>;

  public yearsList: Array<number>;
  public birthDay: { year: number; month: number; day: number; };

  constructor() {
    this.yearsList = [];
    this.birthDay = {
      year: null,
      month: null,
      day: null
    };
    this.dateGenerate();
    this.sendInfo = new EventEmitter();
  }

  ngOnChanges() {
    if (this.activeResult === true) {
      setTimeout(() => {
        this.parseBirthdateToDate();
        this.sendInfo.emit(this.inputData);
      });
    }
  }

  ngAfterContentInit() {
    this.parseBirthdateToSelect();
    setTimeout( () => {
      $('.selectpicker').selectpicker();
    });
  }

  /**
   * Parse the birthDay date to select format
   */
  public parseBirthdateToSelect(): void {
    let date = new Date(this.inputData.Userinfo.birthdate);
    this.birthDay.month = date.getMonth();
    this.birthDay.day = date.getDate();
    this.birthDay.year = date.getFullYear();
  }

  /**
   * Parse the birthDay date select to Data object
   */
  public parseBirthdateToDate(): void {
    this.inputData.Userinfo.birthdate = new Date(this.birthDay.year, this.birthDay.month, this.birthDay.day).toString();
  }

  /**
   * Generate the list of years
   */
  public dateGenerate(): void {
    const now_year: number = new Date().getFullYear();
    for (let i = now_year; i >= 1910; i--) {
      this.yearsList.push(i);
    }
  }
}
