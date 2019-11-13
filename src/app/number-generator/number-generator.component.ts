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
    const called = [];
    const numbers = [];
    for (let i = 1; i <= 90; i++) {
      numbers.push(i);
    }

    // Randomize an array (Durstenfeld shuffle)
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }

    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < numbers.length; i++) {
      called.push(numbers[i]);
    }

    const giveTheFirstValue = () => {
      return called.shift();
    };

    const spitNumberOut = setInterval(() => {
      if (called.length > 0) {
        this.generatedValue = giveTheFirstValue();
        this.genValue.emit(this.generatedValue);
      } else {
        console.log('We are done here!');
        clearInterval(spitNumberOut);
      }
    }, 4000);
  }
}
