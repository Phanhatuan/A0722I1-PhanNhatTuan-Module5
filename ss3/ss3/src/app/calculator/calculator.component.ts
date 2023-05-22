import { Component, OnInit } from '@angular/core';
import {Calculator} from '../calculator';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  number1: number = 0;
  number2: number = 0;
  result: number = 0;

  onAdd() {
    this.result = this.number1 + this.number2;
  }

  onSubtract() {
    this.result = this.number1 - this.number2;
  }
  onDivision() {
    this.result = this.number1 / this.number2;
  }
  onMultiple() {
    this.result = this.number1 * this.number2;
  }

  ngOnInit(): void {
  }
}
