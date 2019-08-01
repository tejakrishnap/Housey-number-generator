import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-number-board',
  templateUrl: './number-board.component.html',
  styleUrls: ['./number-board.component.scss']
})
export class NumberBoardComponent implements OnInit {
  @Input() geneatedValue: number;
  boardNumbers: number[] = [];
  constructor() { }

  ngOnInit() {
    for (let i = 1; i <= 90; i++) {
      this.boardNumbers.push(i);
    }
  }
}
