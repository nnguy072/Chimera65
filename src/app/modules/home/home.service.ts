import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private _httpClient: HttpClient) { }

  get defaultOptions() {
    let params = new HttpParams();
    const defaults = {
      headers: new HttpHeaders({
        Accept: "application/json",
      }),
      params: params,
    };
    return defaults;
  }
  
  public test(summonerName: string): Observable<any> {
    const testUrl = `${environment.space65.baseUrl}test`;
    const testDto = {
      summonerName: summonerName
    };

    return this._httpClient.post<any>(testUrl, testDto, this.defaultOptions);
  }
}
