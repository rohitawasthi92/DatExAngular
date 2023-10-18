import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AccountService {
  constructor(private router: Router, private http: HttpClient) {}

  postRunExtract(name: string) {
    const params = { data: name };
    return this.http.post<any>('http://127.0.0.1:5000/runextract', params);
  }

  // register(user: User) {
  //     return this.http.post(`${environment.apiUrl}/users/register`, user);
  // }
}
