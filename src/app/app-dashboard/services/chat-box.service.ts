import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '@contract/user.model';
import { throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatBoxService {

  constructor (private http: HttpClient) { }

  getUserList() {
    return this.http.get<UserModel[]>("user").pipe(
      retry(1),
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
