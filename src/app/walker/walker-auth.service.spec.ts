import { TestBed } from '@angular/core/testing';

import { WalkerAuthService } from './walker-auth.service';

describe('WalkerAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WalkerAuthService = TestBed.get(WalkerAuthService);
    expect(service).toBeTruthy();
  });
});
