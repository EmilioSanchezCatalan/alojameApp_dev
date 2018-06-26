/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: Upload the homes' imgs
 */

import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material';

import { PopupImgUploadComponent } from '../../popup-img-upload/popup-img-upload.component';
import { ImgLoaded } from '../../../interfaces/img-loaded';
import { FormCreateHome } from '../../../interfaces/formCreateHome';

@Component({
  selector: 'alo-form-home-imgs',
  templateUrl: './form-home-imgs.component.html',
  styleUrls: ['./form-home-imgs.component.css']
})
export class FormHomeImgsComponent implements OnInit, OnChanges {

  @Input() inputData: FormCreateHome;
  @Input() activeResult: boolean;
  @Output() sendInfo: EventEmitter<any>;
  public popupImgUpload: MatDialogRef<PopupImgUploadComponent>;
  public listImgUpload: Array<ImgLoaded>;

  constructor(
    private __dialog: MatDialog,
  ) {
    this.listImgUpload = [];
    this.sendInfo = new EventEmitter();
  }

  ngOnInit() {
    if (this.inputData) {
      this.listImgUpload = this.inputData.imgs.slice();
    }
  }

  ngOnChanges() {
    if (this.activeResult === true) {
      setTimeout( () => {
        this.sendInfo.emit(this.listImgUpload);
      });
    }
  }
  /**
   * Open a popup for upload the img
   */
  public openImgUploader(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = 'home';
    this.popupImgUpload = this.__dialog.open(PopupImgUploadComponent, dialogConfig);
    this.popupImgUpload.afterClosed().subscribe(
      response => {
        if (response) {
          this.listImgUpload.push(response);
        }
      }
    );
  }

  /**
   * Delete a img from the array of homes' imgs
   * @param  pos position of the img on the array
   */
  public deleteImg(pos: number): void {
    this.listImgUpload.splice(pos, 1);
  }

  /**
   * Delete all the img from the array Imgs
   */
  public deleteAllImg(): void {
    this.listImgUpload = [];
  }

}
