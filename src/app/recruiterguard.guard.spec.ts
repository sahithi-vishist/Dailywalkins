import { TestBed, async, inject } from '@angular/core/testing';

import { RecruiterguardGuard } from './recruiterguard.guard';

describe('RecruiterguardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecruiterguardGuard]
    });
  });

  it('should ...', inject([RecruiterguardGuard], (guard: RecruiterguardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
