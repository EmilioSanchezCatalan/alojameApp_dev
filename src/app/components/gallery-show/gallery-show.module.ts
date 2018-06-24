import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightboxModule } from 'angular2-lightbox';

import { GalleryShowComponent } from './gallery-show.component';

@NgModule({
  declarations: [GalleryShowComponent],
  imports: [
    LightboxModule,
    CommonModule
  ],
  exports: [GalleryShowComponent]
})
export class GalleryShowModule {}
