import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { TokenService } from './utilities/token.service';

@Injectable({
  providedIn: 'root',
})
export class UserManagerService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  signout() {
    return this.http.delete('user/logout').pipe(
      retry(2),
      catchError((err) => {
        return throwError(err);
      }),
      tap((result) => {
        this.tokenService.removeToken();
      })
    );
  }
}
