/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: Show all the photos of the home with a lightbox
 * Inputs:
 *      --> listImgs: list with the images of the home
 */
import { Component, Input, OnInit } from '@angular/core';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'gallery-show',
  templateUrl: './gallery-show.component.html',
  styleUrls: ['./gallery-show.component.css']
})
export class GalleryShowComponent implements OnInit {

  @Input() listImgs: Array<{ id: number, url: string; }>;
  public album: Array<{
    src: string;
    caption: string;
    thumb: string;
  }>;

  constructor(
    private __lightbox: Lightbox
  ) {
    this.album = [];
  }

  ngOnInit() {
    this.listImgs.forEach( element => {
      this.album.push({
        src: element.url,
        caption: '',
        thumb: element.url
      });
    });
  }

  /**
   * Open a lightbox with all the home's photografies
   */
  public openGallery(): void {
    this.__lightbox.open(this.album);
  }
}
