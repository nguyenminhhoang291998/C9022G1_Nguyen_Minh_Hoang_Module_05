import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  background = 'white';
  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color: string) {
    this.background = color;
  }
}
