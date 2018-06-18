/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: send file to the server.
 */
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { HomeCrudService } from '../../services/home-crud.service';
import { ImgLoaded } from '../../interfaces/img-loaded';
import { ErrorSimpleNotificationService } from '../../services/error-simple-notification.service';

@Component({
  selector: 'popup-img-upload',
  templateUrl: './popup-img-upload.component.html',
  styleUrls: ['./popup-img-upload.component.css'],
  providers: [
    HomeCrudService,
    ErrorSimpleNotificationService
  ]
})
export class PopupImgUploadComponent {

  public imgUpload: ImgLoaded;
  public isLoadingImg: boolean;

  constructor(
    private __dialogRef: MatDialogRef<PopupImgUploadComponent>,
    private __homeCrud: HomeCrudService,
    private __errorNotif: ErrorSimpleNotificationService
  ) { }

  /**
   * Close the register's popup
   */
  public closePopup(): void {
    this.__dialogRef.close(false);
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
        this.__homeCrud.sendImgHome(img)
          .then( (result) => {
            this.isLoadingImg = false;
            this.imgUpload = result;
          }).catch( (error) => {
            this.isLoadingImg = false;
            this.__errorNotif.show('Lo sentimos ha ocurrido un error en la carga de la imagen, vuelva a intentarlo');
            this.closePopup();
          });
      };
    }
    console.log(event);
  }
}
