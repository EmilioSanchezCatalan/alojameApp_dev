import { Component, Input} from '@angular/core';

@Component({
  selector: 'alo-load-spinner',
  templateUrl: './alo-load-spinner.component.html',
  styleUrls: ['./alo-load-spinner.component.css']
})
export class AloLoadSpinnerComponent {

  @Input() error: boolean;

  constructor() {
    this.error = false;
  }

  /**
   * Reload the actual page
   */
  public refresh(): void {
    window.location.reload();
  }
}
