// src/app/services/AuthService.ts

import { inject, Injectable, TransferState, makeStateKey, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LoginCredentials } from '../models/login.model';
import { environment } from '../environments/environment';
import { StateService } from './StateServices';
import { isPlatformServer } from '@angular/common';
import { CookieAdminService } from './CookieAdmin';

const AUTH_STATE_KEY = makeStateKey<boolean>('isLoggedIn');

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  private http = inject(HttpClient);
  private stateService = inject(StateService);
  private isServer = isPlatformServer(inject(PLATFORM_ID));
  private cookieAdminService = inject(CookieAdminService);
  private transferState = inject(TransferState); 

  constructor() {
    // ✅ Lógica para el servidor
    if (this.isServer) {
      const isLoggedIn = !!this.cookieAdminService.get('auth-token');
      this.transferState.set(AUTH_STATE_KEY, isLoggedIn);
    } else {
      // ✅ Lógica para el cliente
      const existingState = this.transferState.get(AUTH_STATE_KEY, null);
      if (existingState !== null) {
        this.stateService.setLoggedInState(existingState);
        this.transferState.remove(AUTH_STATE_KEY);
      }
    }
   }

  login(credentials: LoginCredentials) {
    return this.http.post(`${environment.apiBaseUrl}/login`, credentials).pipe(
      tap((response: any) => {
        // Asumimos que la respuesta contiene el token
        const token = response.token;

        if (typeof document !== 'undefined') {
          document.cookie = `auth-token=${token}; path=/`;
        }

        this.stateService.setLoggedInState(true);
      })
    );
  }
}