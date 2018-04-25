/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: toolbar for control the home creation
 */
import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'alo-form-create-bar',
  templateUrl: './form-create-bar.component.html',
  styleUrls: ['./form-create-bar.component.css']
})
export class FormCreateBarComponent {

  @Output() back: EventEmitter<any>;
  @Output() continue: EventEmitter<any>;
  @Input() dBack: boolean;
  @Input() dContinue: boolean;
  @Input() save: boolean;

  constructor() {
    this.back = new EventEmitter();
    this.continue = new EventEmitter();
    this.dBack = false;
    this.dContinue = false;
    this.save = false;
  }

  /**
   * Emmit a event back
   */
  public emitBackEvent(): void {
    this.back.emit();
  }

  /**
   * Emit a event continue
   */
  public emitContinueEvent(): void {
    this.continue.emit();
  }

}
