import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkerEmailComponent } from './walker-email.component';

describe('WalkerEmailComponent', () => {
  let component: WalkerEmailComponent;
  let fixture: ComponentFixture<WalkerEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkerEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkerEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
