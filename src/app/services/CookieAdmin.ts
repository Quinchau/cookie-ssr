// ✅ Código corregido: src/app/services/CookieAdmin.ts

import { Injectable, Inject, PLATFORM_ID, Optional } from '@angular/core';
import { isPlatformServer } from '@angular/common';
import { REQUEST, RESPONSE } from '../core/tokens/request.token';
import { Request, Response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class CookieAdminService {
  private isServer: boolean;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Optional() @Inject(REQUEST) private request: Request,
    @Optional() @Inject(RESPONSE) private response: Response
  ) {
    this.isServer = isPlatformServer(this.platformId);
  }

  public get(name: string): string | null {
    if (this.isServer) {
      // ✅ Usamos el objeto de cookies que cookie-parser ya ha procesado
      if (!this.request || !this.request.cookies || !this.request.cookies[name]) {
        return null;
      }
      return this.request.cookies[name];
    } else {
      const cookie = document.cookie
        .split(';')
        .find((cookie) => cookie.trim().startsWith(`${name}=`));
      if (cookie) {
        return cookie.split('=')[1];
      }
      return null;
    }
  }

  public set(name: string, value: string, days?: number): void {
    if (this.isServer) {
      const cookie = `${name}=${value}`;
      this.response.setHeader('Set-Cookie', cookie);
    } else {
      let expires = '';
      if (days) {
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = '; expires=' + date.toUTCString();
      }
      document.cookie = name + '=' + value + expires + '; path=/';
    }
  }

  public delete(name: string): void {
    this.set(name, '', -1);
  }
}