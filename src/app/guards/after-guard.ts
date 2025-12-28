import { CanActivateFn } from '@angular/router';

export const afterGuard: CanActivateFn = (route, state) => {
  return true;
};
