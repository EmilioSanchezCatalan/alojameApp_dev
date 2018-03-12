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
