/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: show the list of valoration avalieve
 */
import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

import { MakeValorationComponent } from '../make-valoration/make-valoration.component';

@Component({
  selector: 'alo-list-valorations',
  templateUrl: './list-valorations.component.html',
  styleUrls: ['./list-valorations.component.css']
})
export class ListValorationsComponent {

  public popupValoration: MatDialogRef<MakeValorationComponent>;

  constructor(
    private __matDialog: MatDialog
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
}
