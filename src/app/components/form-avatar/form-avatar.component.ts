/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: form with an avatar img
 */
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { PopupImgUploadComponent } from '../popup-img-upload/popup-img-upload.component';
import { UserCrudService } from '../../services/user-crud.service';
import { NotificationHttpService } from '../../services/notification-http.service';
import { User } from '../../interfaces/user';

@Component({
  selector: 'alo-form-avatar',
  templateUrl: './form-avatar.component.html',
  styleUrls: ['./form-avatar.component.css']
})
export class FormAvatarComponent {

    @Input() inputData: User;
    public popupImgUpload: MatDialogRef<PopupImgUploadComponent>;
    public displaySpinner: boolean;
    public isErrorLoading: boolean;

    constructor(
      private __dialog: MatDialog,
      private __userCrud: UserCrudService,
      private __notfHttp: NotificationHttpService
    ) {
      this.displaySpinner = false;
      this.isErrorLoading = false;
    }

    /**
     * Open a popup for upload the img
     */
    public openImgUploader(): void {
      this.popupImgUpload = this.__dialog.open(PopupImgUploadComponent);
      this.popupImgUpload.afterClosed().subscribe(
        response => {
          if (response) {
            this.inputData.Userinfo.UserPicture = response;
            this.__userCrud.addImgToProfile(response.id)
              .then(response2 => {
                this.__notfHttp.show(response2);
              }).catch(error => {
                this.__notfHttp.show(error);
              });
          }
        }
      );
    }
}
