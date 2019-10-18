import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifysearchComponent } from './modifysearch.component';

describe('ModifysearchComponent', () => {
  let component: ModifysearchComponent;
  let fixture: ComponentFixture<ModifysearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifysearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
