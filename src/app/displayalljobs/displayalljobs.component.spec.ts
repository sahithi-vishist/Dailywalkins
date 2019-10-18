import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayalljobsComponent } from './displayalljobs.component';

describe('DisplayalljobsComponent', () => {
  let component: DisplayalljobsComponent;
  let fixture: ComponentFixture<DisplayalljobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayalljobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayalljobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
