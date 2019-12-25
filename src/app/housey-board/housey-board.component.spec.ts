import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseyBoardComponent } from './housey-board.component';

describe('HouseyBoardComponent', () => {
  let component: HouseyBoardComponent;
  let fixture: ComponentFixture<HouseyBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseyBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseyBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
