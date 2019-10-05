import { TestBed } from '@angular/core/testing';

import { BookfacilityService } from './bookfacility.service';

describe('BookfacilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BookfacilityService = TestBed.get(BookfacilityService);
    expect(service).toBeTruthy();
  });
});
