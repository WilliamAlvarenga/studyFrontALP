import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hastoken() {
    return !isNullOrUndefined(this.getToken());
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  getToken() {
   return window.localStorage.getItem(KEY);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
