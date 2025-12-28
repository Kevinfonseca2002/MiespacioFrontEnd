import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { beforeGuard } from './before-guard';

describe('beforeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => beforeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
