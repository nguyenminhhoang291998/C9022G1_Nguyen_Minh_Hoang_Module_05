import {Component, ContentChildren, OnInit, QueryList} from '@angular/core';
import {ImgSlideComponent} from "./img-slide/img-slide.component";

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css']
})
export class ImgSliderComponent implements OnInit {

  constructor() {
  }


  slides = [
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=1',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=2',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=3',
    'https://via.placeholder.com/1280x420/e91e63/ffffff?text=4'
  ];
  currentSlideIndex = 0;
  slide = this.slides[this.currentSlideIndex];

  ngOnInit(): void {
  }

  prev() {
    if (this.currentSlideIndex >= 0) {
      this.slide = this.slides[this.currentSlideIndex--];
    } else {
      this.currentSlideIndex = this.slides.length - 1
      this.slide = this.slides[this.currentSlideIndex];
    }
  }

  next() {
    if (this.currentSlideIndex <= this.slides.length - 1) {
      this.slide = this.slides[this.currentSlideIndex++];

    } else {
      this.currentSlideIndex = 0;
      this.slide = this.slides[this.currentSlideIndex];
    }
  }
}
