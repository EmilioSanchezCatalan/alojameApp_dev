import { NgModule } from '@angular/core';

import { FormHomeImgsComponent } from './form-home-imgs.component';
import { PopupImgUploadModule } from '../../popup-img-upload/popup-img-upload.module';

@NgModule({
  declarations: [FormHomeImgsComponent],
  imports: [PopupImgUploadModule],
  exports: [FormHomeImgsComponent]
})
export class  FormHomeImgsModule {}
