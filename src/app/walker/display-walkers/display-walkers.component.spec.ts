import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayWalkersComponent } from './display-walkers.component';

describe('DisplayWalkersComponent', () => {
  let component: DisplayWalkersComponent;
  let fixture: ComponentFixture<DisplayWalkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayWalkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayWalkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
