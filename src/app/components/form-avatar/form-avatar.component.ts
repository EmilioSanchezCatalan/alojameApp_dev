/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: form with an avatar img
 */
import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { PopupImgUploadComponent } from '../popup-img-upload/popup-img-upload.component';

@Component({
  selector: 'alo-form-avatar',
  templateUrl: './form-avatar.component.html',
  styleUrls: ['./form-avatar.component.css']
})
export class FormAvatarComponent {

    public popupImgUpload: MatDialogRef<PopupImgUploadComponent>;

    constructor(
      private __dialog: MatDialog
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
