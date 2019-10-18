import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWalkinsComponent } from './display-walkins.component';

describe('DisplayWalkinsComponent', () => {
  let component: DisplayWalkinsComponent;
  let fixture: ComponentFixture<DisplayWalkinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayWalkinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWalkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
