import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export abstract class BaseService<T> {
  abstract route: string;

  constructor(public http: HttpClient) {

  }

  get(params?): Observable<T[]> {
    let httpParams = new HttpParams();

    if (params) {
      for (const item in params) {
        httpParams = httpParams.set(item, params[item]);
      }
    }

    return this.http.get<T[]>(this.route, { params: httpParams });
  }

  getById(id: string): Observable<T> {
    return this.http.get<T>(this.route + '/' + id);
  }

  post(item: T): Observable<T> {
    return this.http.post<T>(this.route, item);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(this.route + '/' + id);
  }
}
