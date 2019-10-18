import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FregistrationComponent } from './fregistration.component';

describe('FregistrationComponent', () => {
  let component: FregistrationComponent;
  let fixture: ComponentFixture<FregistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FregistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
