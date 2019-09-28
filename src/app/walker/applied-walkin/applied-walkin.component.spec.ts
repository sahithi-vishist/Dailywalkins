import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedWalkinComponent } from './applied-walkin.component';

describe('AppliedWalkinComponent', () => {
  let component: AppliedWalkinComponent;
  let fixture: ComponentFixture<AppliedWalkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedWalkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedWalkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
