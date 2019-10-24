import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFacilityComponent } from './book-facility.component';

describe('BookFacilityComponent', () => {
  let component: BookFacilityComponent;
  let fixture: ComponentFixture<BookFacilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookFacilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
