import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  get(path: string): Observable<any> {
    return this.http.request('GET', path, { responseType:'json' });
  }
}
