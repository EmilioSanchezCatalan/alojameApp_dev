import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';

import { PopupImgUploadComponent } from './popup-img-upload.component';
import { AloPopupModule } from '../../components/alo-popup/alo-popup.module';

@NgModule({
  declarations: [PopupImgUploadComponent],
  imports: [
    MatDialogModule,
    AloPopupModule
  ],
  exports: [PopupImgUploadComponent],
  entryComponents: [PopupImgUploadComponent]
})
export class PopupImgUploadModule {}
