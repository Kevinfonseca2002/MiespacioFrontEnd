import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { afterGuard } from './after-guard';

describe('afterGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => afterGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
