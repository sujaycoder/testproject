import { Injectable } from '@angular/core';


const TOKEN_KEY = 'AuthToken';
const CURRENT_USER_KEY = 'CurrentUser';


@Injectable()
export class TokenStorage {

  constructor() { }

  signOut() {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,  token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  getUserName(): string {
    return sessionStorage.getItem(CURRENT_USER_KEY);
  }

  setUserName(username) {
    window.sessionStorage.setItem(CURRENT_USER_KEY, username);
  }

  

  getClientCode(): string {
    return 'demo';
  }
  
}
