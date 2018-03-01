import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeModule } from './page-home/page-home.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageHomeModule
  ],
  exports: [
    PageHomeModule
  ]
})
export class PagesModule {}
