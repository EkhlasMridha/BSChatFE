import { Injectable } from '@angular/core';
import { retry, retryWhen, concatMap, delay, take } from 'rxjs/operators';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlerService {
  constructor() {}

  hanldeRetry() {
    return retryWhen((result) =>
      result.pipe(
        concatMap((result) => {
          if (result == 0) {
            return of(result);
          }
          return throwError(result);
        }),
        delay(1000),
        take(4)
      )
    );
  }
}
