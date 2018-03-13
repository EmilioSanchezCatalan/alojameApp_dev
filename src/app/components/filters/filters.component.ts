/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: filters dedicated in the list of homes showed
 * Inputs:
 *    --> hasMoreFilters: indicate if the button have been activate.
 * Outputs:
 *    --> moreFilters: indicate that is button 'mas filtros' was been clicked
 */
import { Component, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'alo-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {

  @Output() moreFilters: EventEmitter<any>;
  @Input() hasMoreFilters: boolean;

  constructor() {
    this.moreFilters = new EventEmitter();
    this.hasMoreFilters = false;
  }

  /**
   * Emmit a event witch indicate a advice for show the rest
   * of filters.
   */
  public setEventMoreFilters(): void {
    this.moreFilters.emit();
  }
}
