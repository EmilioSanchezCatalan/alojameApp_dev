import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'alo-popup-header',
  templateUrl: './alo-popup-header.component.html',
  styleUrls: ['./alo-popup-header.component.css']
})
export class AloPopupHeaderComponent {

  @Output() close: EventEmitter<any>;
  @Output() back: EventEmitter<any>;
  @Input() hasBack: boolean;

  constructor() {
    this.close = new EventEmitter();
    this.back = new EventEmitter();
    this.hasBack = false;
  }

  /**
   * Emmit a event for close Popup
   */
  public closePopup(): void {
    this.close.emit();
  }

  /**
   * Emmit a event for go back to the Popup
   */
  public goBack(): void {
    this.back.emit();
  }
}
