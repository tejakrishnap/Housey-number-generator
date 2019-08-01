import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-generator',
  templateUrl: './number-generator.component.html',
  styleUrls: ['./number-generator.component.scss']
})
export class NumberGeneratorComponent implements OnInit {
  generatedValue: number;
  @Output() genValue = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }
    this.generatedValue = getRandomInt(1, 90);
    this.genValue.emit(this.generatedValue);
  }

}
