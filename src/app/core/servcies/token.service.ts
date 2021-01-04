import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

export interface TokenModel {
  accessToken: string;
  refreshToken: string;
}

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private readonly accessToken: string = 'accessToken';
  private readonly refreshToken: string = 'refreshToken';
  constructor(private jwtService: JwtHelperService, private http: HttpClient) {}

  storeToken(token: TokenModel) {
    localStorage.setItem(this.accessToken, token.accessToken);
    localStorage.setItem(this.refreshToken, token.refreshToken);
  }

  removeToken() {
    localStorage.removeItem(this.accessToken);
    localStorage.removeItem(this.refreshToken);
  }

  getToken(): TokenModel {
    let access = localStorage.getItem(this.accessToken);
    let refresh = localStorage.getItem(this.refreshToken);
    if (!(access && refresh)) {
      return null;
    }

    let token: TokenModel = {
      accessToken: access,
      refreshToken: refresh,
    };

    return token;
  }

  isTokenExpired(): boolean {
    let access = localStorage.getItem(this.accessToken);
    return this.jwtService.isTokenExpired(access);
  }

  refreshAccessToken() {
    let token = this.getToken();
    if (token == null) {
      return null;
    }

    return this.http.post('identity/refresh', this.getToken());
  }

  hasToken() {
    if (this.getToken() == null) {
      return false;
    }

    return true;
  }
}
