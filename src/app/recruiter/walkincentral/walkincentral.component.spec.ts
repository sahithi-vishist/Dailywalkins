import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkincentralComponent } from './walkincentral.component';

describe('WalkincentralComponent', () => {
  let component: WalkincentralComponent;
  let fixture: ComponentFixture<WalkincentralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkincentralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkincentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
