import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHomeModule } from './page-home/page-home.module';
import { PageLhomesModule } from './page-lhomes/pages-lhomes.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PageHomeModule,
    PageLhomesModule
  ],
  exports: [
    PageHomeModule,
    PageLhomesModule
  ]
})
export class PagesModule {}
