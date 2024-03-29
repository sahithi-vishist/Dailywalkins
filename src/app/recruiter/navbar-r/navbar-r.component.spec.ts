import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRComponent } from './navbar-r.component';

describe('NavbarRComponent', () => {
  let component: NavbarRComponent;
  let fixture: ComponentFixture<NavbarRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
