import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerSmsComponent } from './walker-sms.component';

describe('WalkerSmsComponent', () => {
  let component: WalkerSmsComponent;
  let fixture: ComponentFixture<WalkerSmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerSmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
