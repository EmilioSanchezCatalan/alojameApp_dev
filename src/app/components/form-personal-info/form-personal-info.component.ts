/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: form with a personal information
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'alo-form-personal-info',
  templateUrl: './form-personal-info.component.html',
  styleUrls: ['./form-personal-info.component.css']
})
export class FormPersonalInfoComponent {

  public yearsList: Array<number>;

  constructor() {
    this.yearsList = [];
    this.dateGenerate();
  }

  /**
   * Generate the list of years
   */
  public dateGenerate(): void {
    const now_year: number = new Date().getFullYear();
    for (let i = now_year; i >= 1910; i--) {
      this.yearsList.push(i);
    }
    setTimeout( () => {
      $('.selectpicker').selectpicker();
    }, 25);
  }
}
