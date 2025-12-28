import { CanActivateFn } from '@angular/router';

export const beforeGuard: CanActivateFn = (route, state) => {
  return true;
};
