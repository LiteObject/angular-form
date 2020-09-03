import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  postUser(user: User): Observable<any> {
    // return of(user);
    return this.httpClient.post('https://putsreq.com/80Yc2w5CcvILWGe1nqc6', user);
  }

  getCities(): Observable<string[]> {
    return of(['Dallas', 'Frisco']);
  }

}
