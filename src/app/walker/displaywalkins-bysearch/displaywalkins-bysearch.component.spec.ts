import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaywalkinsBysearchComponent } from './displaywalkins-bysearch.component';

describe('DisplaywalkinsBysearchComponent', () => {
  let component: DisplaywalkinsBysearchComponent;
  let fixture: ComponentFixture<DisplaywalkinsBysearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaywalkinsBysearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaywalkinsBysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
