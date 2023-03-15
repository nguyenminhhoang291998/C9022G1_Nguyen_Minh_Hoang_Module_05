import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImgSliderComponent} from './img-slider.component';
import {ImgSlideComponent} from './img-slide/img-slide.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ImgSliderComponent, ImgSlideComponent],
  exports: [
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ImgSliderModule {
}
