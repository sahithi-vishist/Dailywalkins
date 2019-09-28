import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationRComponent } from './registration-r.component';

describe('RegistrationRComponent', () => {
  let component: RegistrationRComponent;
  let fixture: ComponentFixture<RegistrationRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
