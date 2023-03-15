import {Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.css']
})
export class ImgSlideComponent implements OnInit {

  @Input()
  slide: string;

  constructor() { }

  ngOnInit(): void {
  }
}
