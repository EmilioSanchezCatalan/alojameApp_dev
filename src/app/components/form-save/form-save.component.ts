/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view with a button for save or cancel a form
 * Outputs:
 *      --> save: emmit a event when the button save is clicked
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alo-form-save',
  templateUrl: './form-save.component.html',
  styleUrls: ['./form-save.component.css']
})
export class FormSaveComponent {

  @Output() save: EventEmitter<any>;

  constructor(
    private __router: Router
  ) {
    this.save = new EventEmitter();
  }

  /**
   * Cancel the saving an return to the previus state
   */
  public cancelSaving(): void {
    switch (localStorage.getItem('userType')) {
      case 'student':
        this.__router.navigate(['private', 'student', 'std-profile', 'show']);
        break;
      case 'owner':
        this.__router.navigate(['private', 'owner', 'own-homes']);
        break;
    }

  }

  /**
  * Emmit the event save
  */
  public emmitSave(): void {
    this.save.emit();
  }
}
