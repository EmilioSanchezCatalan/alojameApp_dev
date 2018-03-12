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
  public isFiltering: boolean;
  public isContentDisplay: boolean;

  constructor() {
    this.title = 'None Title';
    this.isContentDisplay = false;
    this.isFiltering = false;
    this.filtered = new EventEmitter();
    this.restart = new EventEmitter();
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
}
