/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: Upload the homes' imgs
 */

import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

import { PopupImgUploadComponent } from '../../popup-img-upload/popup-img-upload.component';

@Component({
  selector: 'alo-form-home-imgs',
  templateUrl: './form-home-imgs.component.html',
  styleUrls: ['./form-home-imgs.component.css']
})
export class FormHomeImgsComponent {

  public popupImgUpload: MatDialogRef<PopupImgUploadComponent>;

  constructor(
    private __dialog: MatDialog,

  ) { }

  /**
   * Open a popup for upload the img
   */
  public openImgUploader(): void {
    this.popupImgUpload = this.__dialog.open(PopupImgUploadComponent);
    this.popupImgUpload.afterClosed().subscribe(
      response => {
      }
    );
  }

}
