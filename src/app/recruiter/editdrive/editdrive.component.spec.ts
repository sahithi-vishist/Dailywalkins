import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdriveComponent } from './editdrive.component';

describe('EditdriveComponent', () => {
  let component: EditdriveComponent;
  let fixture: ComponentFixture<EditdriveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdriveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
