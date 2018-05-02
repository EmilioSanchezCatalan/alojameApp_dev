/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show the list of valoration avalieve
 */
import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { MakeValorationStudentComponent } from '../make-valoration-student/make-valoration-student.component';
import { MakeValorationHomeComponent } from '../make-valoration-home/make-valoration-home.component';

@Component({
  selector: 'alo-list-valorations',
  templateUrl: './list-valorations.component.html',
  styleUrls: ['./list-valorations.component.css']
})
export class ListValorationsComponent {

  public popupValorationStd: MatDialogRef<MakeValorationStudentComponent>;
  public popupValorationHome: MatDialogRef<MakeValorationHomeComponent>;

  constructor(
    private __matDialog: MatDialog,
    private __router: Router
  ) { }

  /**
   * Open a popup for make a valoration of item selected
   */
  public createValorationStd(): void {
    this.popupValorationStd = this.__matDialog.open(MakeValorationStudentComponent);
    this.popupValorationStd.afterClosed().subscribe(
      response => {
        console.log('valorado');
      }
    );
  }

  /**
   * Open a popup for make a valoration of item selected
   */
  public createValorationHome(): void {
    this.popupValorationHome = this.__matDialog.open(MakeValorationHomeComponent);
    this.popupValorationHome.afterClosed().subscribe(
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
