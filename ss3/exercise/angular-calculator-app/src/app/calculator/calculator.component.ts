import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  input1: number;
  input2: number;
  operation: string;
  result: any = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  calculator() {
    if (this.operation === 'division' && this.input2 === 0) {
      this.result = 'Không thể chia cho 0';
    } else {
      switch (this.operation) {
        case 'addition':
          this.result = this.input1 + this.input2;
          break;
        case 'subtraction':
          this.result = this.input1 - this.input2;
          break;
        case 'multiplication':
          this.result = this.input1 * this.input2;
          break;
        case 'division':
          this.result = this.input1 / this.input2;
          break;
      }
    }
  }

}
