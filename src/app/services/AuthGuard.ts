// src/app/services/auth-guard.guard.ts

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StateService } from './StateServices';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(StateService);
  const router = inject(Router);

  return authService.isLoggedIn$.pipe(
    map(isLoggedIn => {
      // Si el usuario está logueado, permite el acceso.
      if (isLoggedIn) {
        return true;
      }

      // Si no, redirige al login.
      return router.createUrlTree(['/login']);
    })
  );
};