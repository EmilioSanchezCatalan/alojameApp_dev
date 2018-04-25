/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: form element for a counter element
 * Inputs:
 *     --> min: minimal number of total counter
 *     --> max: max number of the total counter
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'alo-counter',
  templateUrl: './alo-counter.component.html',
  styleUrls: ['./alo-counter.component.css']
})
export class AloCounterComponent {

  @Input() min: number;
  @Input() max: number;
  public total: number;

  constructor() {
    this.total = 0;
    this.min = -1000;
    this.max = 1000;
  }

  /**
   * Sum a the total of value a unit
   */
  public sumCounter(): void {
    if ( this.total !== this.max) {
      this.total = this.total + 1;
    }
  }

  /**
   * Res a the total of value a unit
   */
  public resCounter(): void {
    if (this.total !== this.min) {
      this.total = this.total - 1;
    }
  }
}
