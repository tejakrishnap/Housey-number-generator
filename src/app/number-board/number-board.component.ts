import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-number-board',
  templateUrl: './number-board.component.html',
  styleUrls: ['./number-board.component.scss']
})

export class NumberBoardComponent implements OnInit, OnChanges {
  @Input() geneatedValue: number;
  prevNumber: string;
  boardNumbers: number[] = [];
  numberAppearenceObj: object = {};
  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 90; i++) {
      this.boardNumbers.push(i);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!isNaN(changes.geneatedValue.currentValue)) {
      this.prevNumber = changes.geneatedValue.previousValue;
      if (!isNaN(+this.prevNumber)) {
        const prevValueEle = document.querySelector('[data-value="' + this.prevNumber + '"]') as HTMLElement;
        prevValueEle.style.backgroundColor = 'yellow';
        prevValueEle.style.color = 'black';
      }
    }
  }
}
