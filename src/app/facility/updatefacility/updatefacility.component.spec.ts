import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatefacilityComponent } from './updatefacility.component';

describe('UpdatefacilityComponent', () => {
  let component: UpdatefacilityComponent;
  let fixture: ComponentFixture<UpdatefacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatefacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatefacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
