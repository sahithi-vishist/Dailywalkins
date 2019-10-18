import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditWalkinComponent } from './edit-walkin.component';

describe('EditWalkinComponent', () => {
  let component: EditWalkinComponent;
  let fixture: ComponentFixture<EditWalkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditWalkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditWalkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
