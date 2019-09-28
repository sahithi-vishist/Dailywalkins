import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWalkinsComponent } from './view-walkins.component';

describe('ViewWalkinsComponent', () => {
  let component: ViewWalkinsComponent;
  let fixture: ComponentFixture<ViewWalkinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWalkinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWalkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
