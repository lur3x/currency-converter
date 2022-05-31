import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(public http: HttpClient) {}

  exchange(to: string, from: string) {
    return this.http.get(
      `https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=${environment.apiKey}`
    );
  }
}
