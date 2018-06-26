import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormAvatarComponent } from './form-avatar.component';
import { PopupImgUploadModule } from '../popup-img-upload/popup-img-upload.module';
import { AloLoadSpinnerModule } from '../alo-load-spinner/alo-load-spinner.module';

@NgModule({
  declarations: [FormAvatarComponent],
  imports: [
    PopupImgUploadModule,
    AloLoadSpinnerModule,
    CommonModule
  ],
  exports: [FormAvatarComponent]
})
export class FormAvatarModule {}
