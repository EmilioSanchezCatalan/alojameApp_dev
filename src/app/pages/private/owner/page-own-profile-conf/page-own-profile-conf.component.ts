/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view that allow to the owner edit his profile
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'page-own-profile-conf',
  templateUrl: './page-own-profile-conf.component.html',
  styleUrls: ['./page-own-profile-conf.component.css']
})
export class PageOwnProfileConfComponent {

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
    $('.selectpicker').selectpicker();
  }
}
