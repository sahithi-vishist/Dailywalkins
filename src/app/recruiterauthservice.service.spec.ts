import { TestBed } from '@angular/core/testing';

import { RecruiterauthserviceService } from './recruiterauthservice.service';

describe('RecruiterauthserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecruiterauthserviceService = TestBed.get(RecruiterauthserviceService);
    expect(service).toBeTruthy();
  });
});
