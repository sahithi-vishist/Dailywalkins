import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchwalkersComponent } from './searchwalkers.component';

describe('SearchwalkersComponent', () => {
  let component: SearchwalkersComponent;
  let fixture: ComponentFixture<SearchwalkersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchwalkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchwalkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
