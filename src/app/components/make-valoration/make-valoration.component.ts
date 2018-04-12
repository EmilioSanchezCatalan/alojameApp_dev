/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: popup in order to  make a valoration of a student or a home
 */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

declare var $: any;

@Component({
  selector: 'app-make-valoration',
  templateUrl: './make-valoration.component.html',
  styleUrls: ['./make-valoration.component.css']
})
export class MakeValorationComponent implements OnInit {

  constructor(
    private __dialogRef: MatDialogRef<MakeValorationComponent>,
  ) { }

  ngOnInit() {
    $('.rating').rating('create');
  }
  /**
   * Close the register's popup
   */
  public closePopup(): void {
    this.__dialogRef.close(false);
  }
}
