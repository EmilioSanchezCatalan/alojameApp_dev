/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: popup in order to  make a valoration of a student or a home
 */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

declare var $: any;

@Component({
  selector: 'alo-make-valoration-student',
  templateUrl: './make-valoration-student.component.html',
  styleUrls: ['./make-valoration-student.component.css']
})
export class MakeValorationStudentComponent implements OnInit {

  constructor(
    private __dialogRef: MatDialogRef<MakeValorationStudentComponent>,
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
