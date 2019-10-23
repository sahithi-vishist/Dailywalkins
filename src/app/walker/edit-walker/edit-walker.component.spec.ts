import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWalkerComponent } from './edit-walker.component';

describe('EditWalkerComponent', () => {
  let component: EditWalkerComponent;
  let fixture: ComponentFixture<EditWalkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWalkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWalkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
