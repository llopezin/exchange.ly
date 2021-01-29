import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Rates from '../models/rates.model';

@Injectable({
  providedIn: 'root',
})
export class ExchangeRatesService {
  private latestRatesUrl = 'https://api.exchangeratesapi.io/latest?';
  private historyRatesUrl = 'https://api.exchangeratesapi.io/history?';

  constructor(private http: HttpClient) {}

  getLatestRates(base: string): Observable<Rates> {
    return this.http.get<Rates>(`${this.latestRatesUrl}base=${base}`);
  }

  getCurrencyRates(base: string, symbols: string[]): Observable<Rates> {
    return this.http.get<Rates>(
      `${this.latestRatesUrl}base=${base}&symbols=${symbols.toString()}`
    );
  }

  getHistoricRates(
    base: string,
    symbols: string[],
    dates: { start: string; end: string }
  ) {
    return this.http.get<Rates>(
      `${this.historyRatesUrl}start_at=${dates.start}&end_at=${
        dates.end
      }&base=${base}&symbols=${symbols.toString()}`
    );
  }
}
