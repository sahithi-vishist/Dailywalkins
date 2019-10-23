import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinDetailsRComponent } from './walkin-details-r.component';

describe('WalkinDetailsRComponent', () => {
  let component: WalkinDetailsRComponent;
  let fixture: ComponentFixture<WalkinDetailsRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkinDetailsRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkinDetailsRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
