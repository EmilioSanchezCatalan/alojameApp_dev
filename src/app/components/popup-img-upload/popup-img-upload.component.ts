/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: send file to the server.
 */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'popup-img-upload',
  templateUrl: './popup-img-upload.component.html',
  styleUrls: ['./popup-img-upload.component.css']
})
export class PopupImgUploadComponent {

  constructor(
    private __dialogRef: MatDialogRef<PopupImgUploadComponent>,
  ) { }

  /**
   * Close the register's popup
   */
  public closePopup(): void {
    this.__dialogRef.close(false);
  }
}
