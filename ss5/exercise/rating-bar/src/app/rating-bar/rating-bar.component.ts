import {Component, EventEmitter, OnInit, Output, Input, SimpleChanges, OnChanges} from '@angular/core';
import {IRatingUnit} from '../irating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css']
})
export class RatingBarComponent implements OnInit {

  @Input()
  max;
  @Input()
  ratingValue;
  @Input()
  showRatingValue = true;

  ratingUnits: Array<IRatingUnit> = [];

  constructor() {
  }

  calculate(max, ratingValue) {
    for (let i = 0; i < max; i++) {
      this.ratingUnits.push({
        value: i + 1,
        active: i < ratingValue
      });
    }
  }

  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }

  select(index) {
    this.ratingValue = index + 1;
    this.enter(index + 1);
  }

  enter(index) {
    for (let i = 0; i <= index; i++) {
      this.ratingUnits[i].active = true;
    }
  }

  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }


}
