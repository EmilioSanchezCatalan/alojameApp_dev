/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: form element for a counter element
 * Inputs:
 *     --> min: minimal number of total counter
 *     --> max: max number of the total counter
 * Outputs:
 *     --> out: send the total number.
 */
import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'alo-counter',
  templateUrl: './alo-counter.component.html',
  styleUrls: ['./alo-counter.component.css']
})
export class AloCounterComponent implements OnInit {

  @Input() min: number;
  @Input() max: number;
  @Input() in: number;
  @Output() out: EventEmitter<number>;
  public total: number;

  constructor() {
    this.total = 0;
    this.min = -1000;
    this.max = 1000;
    this.out = new EventEmitter();
  }

  ngOnInit() {
    if (this.in) { this.total = this.in; }
  }
  /**
   * Sum a the total of value a unit
   */
  public sumCounter(): void {
    if ( this.total !== this.max) {
      this.total = this.total + 1;
      this.out.emit(this.total);
    }
  }

  /**
   * Res a the total of value a unit
   */
  public resCounter(): void {
    if (this.total !== this.min) {
      this.total = this.total - 1;
      this.out.emit(this.total);
    }
  }
}
