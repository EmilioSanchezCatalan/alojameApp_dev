/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: allow to the user leave the home or subscribe
 * Inputs:
 *    --> subscribe: idicate if you are going to subscribe or desubscribe [true/false]
 *    --> disabled: indicate if the action button is disabled or not [true/false]
 * Output:
 *    --> action: emit the event when the button is clicked and not disabled
 */

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alo-subscribe-bar',
  templateUrl: './subscribe-bar.component.html',
  styleUrls: ['./subscribe-bar.component.css']
})
export class SubscribeBarComponent {

  @Input() subscribe: boolean;
  @Input() disabled: boolean;
  @Input() price: number;
  @Output() action: EventEmitter<any>;

  constructor() {
    this.subscribe = true;
    this.disabled = false;
    this.action = new EventEmitter();
  }

  /**
   * Emit a event for active the subscribe bar
   */
  public emitActionEvent(): void {
    if (this.disabled === false) {
      this.action.emit();
    }
  }

}
