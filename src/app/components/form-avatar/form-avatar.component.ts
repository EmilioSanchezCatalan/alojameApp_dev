/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: form with an avatar img
 */
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogConfig } from '@angular/material';

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
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = localStorage.getItem('userType') === 'owner' ? 'owner' : 'student';
      this.popupImgUpload = this.__dialog.open(PopupImgUploadComponent, dialogConfig);
      this.popupImgUpload.afterClosed().subscribe(
        response => {
          if (response) {
            this.inputData.Userinfo.UserPicture = response;
            if (localStorage.getItem('userType') === 'owner') {
              this.__userCrud.addImgToProfileOwner(response.id)
                .then(response2 => {
                  this.__notfHttp.show(response2);
                }).catch(error => {
                  this.__notfHttp.show(error);
                });
            }
            if (localStorage.getItem('userType') === 'student') {
              this.__userCrud.addImgToProfileStd(response.id)
                .then(response2 => {
                  this.__notfHttp.show(response2);
                }).catch(error => {
                  this.__notfHttp.show(error);
                });
            }
          }
        }
      );
    }
}
