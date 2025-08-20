import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CookieAdminService } from './CookieAdmin';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this._isLoggedIn.asObservable();

  constructor(private cookieAdminService: CookieAdminService) {
    const hasToken = !!this.cookieAdminService.get('auth-token');
    this._isLoggedIn.next(hasToken);
    console.log('🔐 Initial Auth State:', hasToken);
  }

  setLoggedInState(state: boolean): void {
    this._isLoggedIn.next(state);
  }
}