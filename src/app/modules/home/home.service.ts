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

  public getSummonerInfo(summonerName: string): Observable<any> {
    const urlPath = `${environment.space65.baseUrl}/live-match`;
    const requestDto = {
      headers: new HttpHeaders().set("Accept", "application/json"),
      params: new HttpParams().set("summonerName", summonerName)
    }

    return this._httpClient.get<any>(urlPath, requestDto);
  }
}
