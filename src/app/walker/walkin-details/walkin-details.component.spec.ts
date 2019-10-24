import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinDetailsComponent } from './walkin-details.component';

describe('WalkinDetailsComponent', () => {
  let component: WalkinDetailsComponent;
  let fixture: ComponentFixture<WalkinDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkinDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
