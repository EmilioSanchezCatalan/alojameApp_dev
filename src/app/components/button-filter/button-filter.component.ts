/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: type of button with a dropdown panel for represent content
 * Inputs:
 *    --> title: text into the button.
 * Outputs:
 *    --> filtered: indicated if the filter have been apply
 *    --> restart: indicated if the filter have been restart
 */
import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'alo-button-filter',
  templateUrl: './button-filter.component.html',
  styleUrls: ['./button-filter.component.css']
})
export class ButtonFilterComponent {

  @Input() title: string;
  @Output() filtered: EventEmitter<any>;
  @Output() restart: EventEmitter<any>;
  @Output() none: EventEmitter<any>;
  @Input() empty: boolean;
  public isContentDisplay: boolean;
  public isFiltering: boolean;

  constructor() {
    this.title = 'None Title';
    this.isContentDisplay = false;
    this.isFiltering = false;
    this.filtered = new EventEmitter();
    this.restart = new EventEmitter();
    this.none = new EventEmitter();
  }

  /**
   * Change the state when is set a filter or not.
   * @param {boolean} state state of filtering setting.
   */
  public setIsFiltering ( state: boolean): void {
    this.isFiltering = state;
  }

  /**
   * Emit a event and indicate that the filter is set.
   */
  public setFilteredEvent(): void {
    this.filtered.emit();
  }

  /**
   * Emmit a event and indicate that the filter is restart.
   */
  public setRestartEvent(): void {
    this.restart.emit();
  }

  /**
   * Emmit event when the user dont click any action only the
   * background
   */
  public setNoneEvent(): void {
    this.none.emit();
  }
}
