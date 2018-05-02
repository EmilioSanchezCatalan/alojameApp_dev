/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: popup in order to  make a valoration of a home or a home
 */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

declare var $: any;

@Component({
  selector: 'alo-make-valoration-home',
  templateUrl: './make-valoration-home.component.html',
  styleUrls: ['./make-valoration-home.component.css']
})
export class MakeValorationHomeComponent implements OnInit {

  constructor(
    private __dialogRef: MatDialogRef<MakeValorationHomeComponent>,
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
