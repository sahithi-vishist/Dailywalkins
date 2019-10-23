import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarWComponent } from './navbar-w.component';

describe('NavbarWComponent', () => {
  let component: NavbarWComponent;
  let fixture: ComponentFixture<NavbarWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
