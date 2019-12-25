import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-housey-board',
  templateUrl: './housey-board.component.html',
  styleUrls: ['./housey-board.component.scss']
})
export class HouseyBoardComponent implements OnInit {
  generatedNumber: number;
  title = 'Housey-app';

  constructor() { }

  ngOnInit() {
  }

  onNumGen($event) {
    this.generatedNumber = $event;
  }
}
