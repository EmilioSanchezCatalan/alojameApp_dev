/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: send file to the server.
 */
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { HomeCrudService } from '../../services/home-crud.service';
import { UserCrudService } from '../../services/user-crud.service';
import { ImgLoaded } from '../../interfaces/img-loaded';
import { ErrorSimpleNotificationService } from '../../services/error-simple-notification.service';

@Component({
  selector: 'popup-img-upload',
  templateUrl: './popup-img-upload.component.html',
  styleUrls: ['./popup-img-upload.component.css'],
  providers: [
    HomeCrudService,
    ErrorSimpleNotificationService,
    UserCrudService
  ]
})
export class PopupImgUploadComponent {

  public imgUpload: ImgLoaded;
  public isLoadingImg: boolean;

  constructor(
    private __dialogRef: MatDialogRef<PopupImgUploadComponent>,
    private __homeCrud: HomeCrudService,
    private __errorNotif: ErrorSimpleNotificationService,
    private __userCrud: UserCrudService,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  /**
   * Close the register's popup
   */
  public closePopup(): void {
    this.__dialogRef.close(false);
  }

  /**
   * Save image and send to the parent component
   */
  public savePopup(): void {
    this.__dialogRef.close(this.imgUpload);
  }

  /**
   * send a preview Img to y the backend
   * @param event img to upload
   */
  public setPreviewImg( event: any): void {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        let img = {
          filename: file.name,
          filetype: file.type,
          value: reader.result
        };
        this.isLoadingImg = true;
        if (this.data === 'home') {
          this.__homeCrud.sendImgHome(img)
            .then( (result) => {
              this.isLoadingImg = false;
              this.imgUpload = result;
            }).catch( (error) => {
              this.isLoadingImg = false;
              this.__errorNotif.show('Lo sentimos ha ocurrido un error en la carga de la imagen, vuelva a intentarlo');
              this.closePopup();
            });
        }
        if (this.data === 'owner') {
          this.__userCrud.sendImgProfileOwner(img)
            .then( (result) => {
              this.isLoadingImg = false;
              this.imgUpload = result;
            }).catch( (error) => {
              this.isLoadingImg = false;
              this.__errorNotif.show('Lo sentimos ha ocurrido un error en la carga de la imagen, vuelva a intentarlo');
              this.closePopup();
            });
        }
        if (this.data === 'student') {
          this.__userCrud.sendImgProfileStd(img)
            .then( (result) => {
              this.isLoadingImg = false;
              this.imgUpload = result;
            }).catch( (error) => {
              this.isLoadingImg = false;
              this.__errorNotif.show('Lo sentimos ha ocurrido un error en la carga de la imagen, vuelva a intentarlo');
              this.closePopup();
            });
        }
      };
    }
  }
}
