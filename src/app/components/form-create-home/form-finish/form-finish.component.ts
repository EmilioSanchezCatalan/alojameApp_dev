/**
 * @author Emiilio Sánchez Catalan <esc00019@gmail.com>
 * Purpose: indicate finish of the creation home
 */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'alo-form-finish',
  templateUrl: './form-finish.component.html',
  styleUrls: ['./form-finish.component.css']
})
export class FormFinishComponent {

  constructor(
    private ___router: Router
  ) { }

  /**
   * Go to the home owner section
   */
  public gotoHome(): void {
    this.___router.navigate(['private', 'owner', 'own-homes']);
  }
}
