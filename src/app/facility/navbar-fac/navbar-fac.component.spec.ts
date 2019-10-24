import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFacComponent } from './navbar-fac.component';

describe('NavbarFacComponent', () => {
  let component: NavbarFacComponent;
  let fixture: ComponentFixture<NavbarFacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarFacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarFacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
