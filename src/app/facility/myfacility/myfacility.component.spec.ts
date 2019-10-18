import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyfacilityComponent } from './myfacility.component';

describe('MyfacilityComponent', () => {
  let component: MyfacilityComponent;
  let fixture: ComponentFixture<MyfacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyfacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyfacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
