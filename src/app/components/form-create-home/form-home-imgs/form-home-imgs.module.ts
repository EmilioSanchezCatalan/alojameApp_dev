import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormHomeImgsComponent } from './form-home-imgs.component';
import { PopupImgUploadModule } from '../../popup-img-upload/popup-img-upload.module';

@NgModule({
  declarations: [FormHomeImgsComponent],
  imports: [
    PopupImgUploadModule,
    CommonModule
  ],
  exports: [FormHomeImgsComponent]
})
export class  FormHomeImgsModule {}
