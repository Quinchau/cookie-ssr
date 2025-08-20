// ✅ Código: src/app/services/auth.interceptor.ts

import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { CookieAdminService } from './CookieAdmin';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const cookieAdminService = inject(CookieAdminService);
  const authToken = cookieAdminService.get('auth-token');

  if (authToken) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return next(authReq);
  }

  return next(req);
};