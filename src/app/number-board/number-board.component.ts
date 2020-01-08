import { UserInformationService } from './../user-information.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

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
  userName: string;
  constructor(private userInformationService: UserInformationService, private router: Router) {
  }

  ngOnInit() {
    for (let i = 1; i <= 90; i++) {
      this.boardNumbers.push(i);
    }

    if (this.userInformationService.userFormData === undefined) {
      this.router.navigateByUrl('');
    } else {
      this.userName = this.userInformationService.userFormData.userName;
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!isNaN(changes.geneatedValue.currentValue)) {
      const previousNumberEle = document.querySelector('[data-previous-number]');
      this.prevNumber = changes.geneatedValue.previousValue;
      if (this.prevNumber !== undefined) {
        previousNumberEle.classList.remove('hide');
      }
      if (!isNaN(+this.prevNumber)) {
        const prevValueEle = document.querySelector('[data-value="' + this.prevNumber + '"]') as HTMLElement;
        prevValueEle.style.backgroundColor = 'yellow';
        prevValueEle.style.color = 'black';
      }
    }
  }
}
