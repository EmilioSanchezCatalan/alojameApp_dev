/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: page in order to create a new home
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'page-own-home-create',
  templateUrl: './page-own-home-create.component.html',
  styleUrls: ['./page-own-home-create.component.css']
})
export class PageOwnHomeCreateComponent implements OnInit {

  public actualStep: number;
  public listSteps: Array<string>;

  constructor() {
    this.actualStep = 0;
    this.listSteps = ['type', 'rooms', 'services', 'address', 'rules', 'ad', 'imgs', 'finish'];
  }

  ngOnInit() {
    $('.selectpicker').selectpicker();
  }

  /**
   * Sum one at the creations steps
   */
  public nextStep(): void {
    if (this.actualStep < (this.listSteps.length - 1) ) {
      this.actualStep++;
    }
  }

  /**
   * Res one at the creations steps
   */
  public preStep(): void {
    if (this.actualStep > 0) {
      this.actualStep--;
    }
  }

}
