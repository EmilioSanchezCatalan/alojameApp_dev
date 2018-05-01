/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: view with a button for save or cancel a form
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alo-form-save',
  templateUrl: './form-save.component.html',
  styleUrls: ['./form-save.component.css']
})
export class FormSaveComponent {

  constructor(
    private __router: Router
  ) { }

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
}
