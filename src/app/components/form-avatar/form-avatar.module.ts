import { NgModule } from '@angular/core';

import { FormAvatarComponent } from './form-avatar.component';
import { PopupImgUploadModule } from '../popup-img-upload/popup-img-upload.module';

@NgModule({
  declarations: [FormAvatarComponent],
  imports: [PopupImgUploadModule],
  exports: [FormAvatarComponent]
})
export class FormAvatarModule {}
