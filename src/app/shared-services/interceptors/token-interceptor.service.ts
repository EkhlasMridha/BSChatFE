import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { TokenService, TokenModel } from '../utilities/token.service';
import { switchMap, filter, take, catchError } from 'rxjs/operators';
import { DomainService } from '../utilities/domain.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class TokenInterceptorService implements HttpInterceptor {
  private isRefreshing: boolean = false;
  private RefreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  constructor(private tokenService: TokenService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.tokenService.getToken()) {
      req = this.addToken(req, this.tokenService.getToken());
    }

    return next.handle(req).pipe(
      catchError((res) => {
        if (res instanceof HttpErrorResponse && res.status == 401) {
          if (res.error == DomainService.domains.RefreshError) {
            this.tokenService.removeToken();
            this.router.navigate(['signin']);
            return null;
          }
          return this.handleUnauthorizeError(req, next);
        }
        return throwError(res);
      })
    );
  }

  private addToken(
    request: HttpRequest<any>,
    token: TokenModel
  ): HttpRequest<any> {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token.accessToken}`,
      },
    });

    return request;
  }

  private handleUnauthorizeError(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.RefreshTokenSubject.next(null);

      return this.tokenService.refreshAccessToken().pipe(
        switchMap((token: TokenModel) => {
          this.isRefreshing = false;
          console.log('refresh');
          console.log(token);
          this.tokenService.storeToken(token);
          this.RefreshTokenSubject.next(token.accessToken);
          return next.handle(this.addToken(request, token));
        })
      );
    } else {
      return this.RefreshTokenSubject.pipe(
        filter((token) => token !== null),
        take(1),
        switchMap((token) => {
          return next.handle(this.addToken(request, token));
        })
      );
    }
  }
}
