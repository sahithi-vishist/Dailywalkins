import { TestBed } from '@angular/core/testing';

import { HttpinterceptorRecService } from './httpinterceptor-rec.service';

describe('HttpinterceptorRecService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpinterceptorRecService = TestBed.get(HttpinterceptorRecService);
    expect(service).toBeTruthy();
  });
});
