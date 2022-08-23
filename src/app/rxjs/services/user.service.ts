import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../models/user';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  urlUser = 'https://jsonplaceholder.typicode.com/users';
  users$ = this.http.get<User[]>(this.urlUser).pipe(
    tap((data) => {
      console.log('UserService: ');
      console.log(JSON.stringify(data[0]));
    }),
    catchError(() => of([]))
  );
}
