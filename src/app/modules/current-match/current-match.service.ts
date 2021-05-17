import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentMatchService {
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

  public getSummonerInfo(summonerName: string): Observable<number> {
    const urlPath = `${environment.space65.baseUrl}my_summoner`;
    const requestDto = {
      headers: new HttpHeaders().set("Accept", "application/json"),
      params: new HttpParams().set("summonerName", summonerName)
    }

    return this._httpClient.get<number>(urlPath, requestDto);
  }
}
