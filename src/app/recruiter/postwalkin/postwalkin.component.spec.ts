import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostwalkinComponent } from './postwalkin.component';

describe('PostwalkinComponent', () => {
  let component: PostwalkinComponent;
  let fixture: ComponentFixture<PostwalkinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostwalkinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostwalkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
