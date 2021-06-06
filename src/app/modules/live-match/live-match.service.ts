import { apiendpoints } from '../../shared/constants/apiendpoints';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { ILiveMatchModel } from 'src/app/shared/models/live-match.model';

@Injectable({
  providedIn: 'root'
})
export class LiveMatchService {
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

  public getLiveMatch(summonerName: string): Observable<ILiveMatchModel> {
    const urlPath = `${environment.space65.baseUrl}${apiendpoints.space65.getLiveMatch}`;
    const requestDto = {
      headers: new HttpHeaders().set("Accept", "application/json"),
      params: new HttpParams().set("summonerName", summonerName)
    }

    return this._httpClient.get<ILiveMatchModel>(urlPath, requestDto);
  }

  public getSummonerInfo(summonerName: string): Observable<number> {
    const urlPath = `${environment.space65.baseUrl}${apiendpoints.space65.getWinPrediction}`;
    const requestDto = {
      headers: new HttpHeaders().set("Accept", "application/json"),
      params: new HttpParams().set("summonerName", summonerName)
    }

    return this._httpClient.get<number>(urlPath, requestDto);
  }
}
