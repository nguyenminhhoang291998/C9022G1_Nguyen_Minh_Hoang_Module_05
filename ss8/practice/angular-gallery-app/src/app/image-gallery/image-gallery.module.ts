import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCardComponent } from './image-card/image-card.component';
import { ImageGalleryComponent } from './image-gallery.component';



@NgModule({
  declarations: [ImageCardComponent, ImageGalleryComponent],
  exports: [
    ImageGalleryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageGalleryModule { }
