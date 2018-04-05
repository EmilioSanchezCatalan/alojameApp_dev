import { NgModule } from '@angular/core';
import { LightboxModule } from 'angular2-lightbox';

import { GalleryShowComponent } from './gallery-show.component';

@NgModule({
  declarations: [GalleryShowComponent],
  imports: [LightboxModule],
  exports: [GalleryShowComponent]
})
export class GalleryShowModule {}
