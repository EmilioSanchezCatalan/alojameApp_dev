/**
 * @author Emilio Sánchez Catalán <esc00019@gmail.com>
 * Purpose: Show all the photos of the home with a lightbox
 */
import { Component } from '@angular/core';
import { Lightbox } from 'angular2-lightbox';

@Component({
  selector: 'gallery-show',
  templateUrl: './gallery-show.component.html',
  styleUrls: ['./gallery-show.component.css']
})
export class GalleryShowComponent {
  public album: Array<{
    src: string;
    caption: string;
    thumb: string;
  }>;

  constructor(
    private __lightbox: Lightbox
  ) {
    // Mock album of photos
    this.album = [];
    this.album.push({
      src: 'https://a0.muscache.com/im/pictures/16186182/893329a8_original.jpg?aki_policy=x_large',
      caption: 'dat',
      thumb: 'https://a0.muscache.com/im/pictures/16186182/893329a8_original.jpg?aki_policy=x_large',
    });
    this.album.push({
      src: 'https://a0.muscache.com/im/pictures/16186213/d2b65d11_original.jpg?aki_policy=x_large',
      caption: 'dat',
      thumb: 'https://a0.muscache.com/im/pictures/16186213/d2b65d11_original.jpg?aki_policy=x_large',
    });
    this.album.push({
      src: 'https://a0.muscache.com/im/pictures/16186243/39e84761_original.jpg?aki_policy=x_large',
      caption: 'dat',
      thumb: 'https://a0.muscache.com/im/pictures/16186243/39e84761_original.jpg?aki_policy=x_large',
    });
  }

  /**
   * Open a lightbox with all the home's photografies
   */
  public openGallery(): void {
    this.__lightbox.open(this.album);
  }
}
