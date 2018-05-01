/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show the list of valoration avalieve
 */
import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { MakeValorationComponent } from '../make-valoration/make-valoration.component';

@Component({
  selector: 'alo-list-valorations',
  templateUrl: './list-valorations.component.html',
  styleUrls: ['./list-valorations.component.css']
})
export class ListValorationsComponent {

  public popupValoration: MatDialogRef<MakeValorationComponent>;

  constructor(
    private __matDialog: MatDialog,
    private __router: Router
  ) { }

  /**
   * Open a popup for make a valoration of item selected
   */
  public createValoration(): void {
    this.popupValoration = this.__matDialog.open(MakeValorationComponent);
    this.popupValoration.afterClosed().subscribe(
      response => {
        console.log('valorado');
      }
    );
  }

  /**
   * Navigate to the profile of the user selected
   */
  public gotoProfile(): void {
    switch (localStorage.getItem('userType')) {
      case 'owner':
        this.__router.navigate(['private', 'owner', 'std-profile']);
        break;
      case 'student':
        this.__router.navigate(['private', 'student', 'profile']);
        break;
    }
  }

  /**
   * Navigate to the view home
   */
  public gotoHome(): void {
    this.__router.navigate(['private', 'student', 'std-home']);
  }
}
