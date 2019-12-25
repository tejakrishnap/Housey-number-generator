import { UserInformationService } from './../user-information.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-number-generator',
  templateUrl: './number-generator.component.html',
  styleUrls: ['./number-generator.component.scss']
})
export class NumberGeneratorComponent implements OnInit {
  generatedValue: number;
  secondsCounter: number;
  @Output() genValue = new EventEmitter<number>();
  constructor(private userInformationService: UserInformationService) { }

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

    this.secondsCounter = 1;
    setInterval(() => {
      this.secondsCounter++;
    }, 1000);

    const loaderTime = this.userInformationService.userFormData.pickingTime;
    console.log(this.userInformationService.userFormData.pickingTime);

    const spitNumberOut = setInterval(() => {
      const counterElement = document.querySelector('[data-number-loader]');
      const pickedNumber = document.querySelector('[data-picked-number]');
      if (called.length > 0) {
        counterElement.classList.add('hide');
        pickedNumber.classList.remove('hide');
        this.generatedValue = giveTheFirstValue();
        this.genValue.emit(this.generatedValue);
      } else {
        console.log('We are done here!');
        clearInterval(spitNumberOut);
      }
      setTimeout(() =>  {
        counterElement.classList.remove('hide');
        pickedNumber.classList.add('hide');
      }, 2000);
    }, (this.userInformationService.userFormData.pickingTime * 1000));
  }
}
